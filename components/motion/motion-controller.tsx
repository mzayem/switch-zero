"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// One registry for the whole site, so every page shares the same motion.
// Cards that tilt toward the pointer:
const TILT_TARGETS = [
  ".image-service-card",
  ".supplier-card",
  ".article-grid article",
  ".industry-card",
  ".feature-grid article",
  ".detail-card",
  ".resource-grid article",
  ".related-grid > a",
  ".case-list article",
].join(",");
// Groups whose children rise in, in a wave, when scrolled into view:
const REVEAL_TARGETS = [
  ".supplier-grid",
  ".feature-grid",
  ".industry-grid",
  ".article-grid",
  ".steps-grid",
  ".detail-card-grid",
  ".resource-grid",
  ".related-grid",
  ".case-list",
].join(",");

const MAX_TILT = 7;
// Wide cards tilt less, so their far edges don't swing too far.
const TILT_REFERENCE_WIDTH = 380;

const INTERACTIVE =
  "a, button, [role='button'], summary, label, select, [data-tilt], [data-slot='switch']";
const TEXT_ENTRY =
  "input:not([type='checkbox']):not([type='radio']):not([type='submit']):not([type='button']):not([type='range']), textarea, [contenteditable='true']";

// Site-wide motion wiring, driven by data attributes so pages stay server
// components:
// - [data-tilt]: 3D tilt that follows the pointer (fine pointers only).
// - [data-reveal]: children rise in once, staggered, when the group scrolls
//   into view. Content stays visible if this script never runs.
// - [data-sequence]: choreographed piece that opens in view and closes when
//   the visitor scrolls back up past it.
// - A custom cursor: an inverting dot plus a trailing ring.
export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    document
      .querySelectorAll(TILT_TARGETS)
      .forEach((el) => el.setAttribute("data-tilt", ""));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    // Only groups starting below the fold reveal; anything visible on load
    // stays put rather than animating without a trigger.
    document.querySelectorAll<HTMLElement>(REVEAL_TARGETS).forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
        el.setAttribute("data-reveal", "");
      }
    });

    const root = document.documentElement;
    root.dataset.motion = "ready";

    const groups = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not(.is-revealed)",
    );
    groups.forEach((group) =>
      [...group.children].forEach((child, index) =>
        (child as HTMLElement).style.setProperty("--reveal-index", `${index}`),
      ),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const group = entry.target;
          group.classList.add("is-revealed");
          observer.unobserve(group);
          // Once the wave has played, drop the stagger so hover and tilt
          // respond immediately.
          window.setTimeout(
            () => group.classList.add("reveal-done"),
            group.children.length * 50 + 600,
          );
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    groups.forEach((group) => observer.observe(group));

    // [data-sequence]: plays when it is a third into view and closes again
    // once it drops back below the viewport (the visitor scrolled up past
    // it), so scrolling down replays it. The gap between the open and close
    // points stops it toggling at one position.
    const settleTimers = new Map<Element, number>();
    const sequenceObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target;
          const open = el.classList.contains("is-revealed");
          if (!open && entry.intersectionRatio >= 0.35) {
            el.classList.remove("is-closing");
            el.classList.add("is-revealed");
            // After the build, hover and tilt take over with no delays.
            settleTimers.set(
              el,
              window.setTimeout(() => el.classList.add("reveal-done"), 2300),
            );
          } else if (
            open &&
            entry.intersectionRatio < 0.15 &&
            entry.boundingClientRect.top > 0
          ) {
            window.clearTimeout(settleTimers.get(el));
            el.classList.remove("is-revealed", "reveal-done");
            el.classList.add("is-closing");
          }
        }
      },
      { threshold: [0, 0.15, 0.35] },
    );
    document
      .querySelectorAll("[data-sequence]")
      .forEach((el) => sequenceObserver.observe(el));

    return () => {
      observer.disconnect();
      sequenceObserver.disconnect();
      settleTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [pathname]);

  useEffect(() => {
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!fine.matches) return;

    let active: HTMLElement | null = null;
    let frame = 0;
    let pointer = { x: 0, y: 0 };

    const paint = () => {
      frame = 0;
      if (!active) return;
      const rect = active.getBoundingClientRect();
      const px = (pointer.x - rect.left) / rect.width;
      const py = (pointer.y - rect.top) / rect.height;
      const tilt = MAX_TILT * Math.min(1, TILT_REFERENCE_WIDTH / rect.width);
      // Locked to the pointer with no easing while it moves.
      active.style.transform = `perspective(900px) rotateX(${(0.5 - py) * tilt}deg) rotateY(${(px - 0.5) * tilt}deg) translateY(-6px)`;
      active.style.setProperty("--glare-x", `${px * 100}%`);
      active.style.setProperty("--glare-y", `${py * 100}%`);
    };

    const release = (el: HTMLElement) => {
      el.classList.remove("is-tilting");
      el.style.transform = "";
    };

    const onMove = (event: PointerEvent) => {
      const target = (event.target as Element).closest<HTMLElement>(
        "[data-tilt]",
      );
      if (target !== active) {
        if (active) release(active);
        active = target;
        active?.classList.add("is-tilting");
      }
      if (!active) return;
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      if (active) release(active);
      active = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (active) release(active);
    };
  }, []);

  // Custom cursor: the dot sits exactly on the pointer (no lag on direct
  // manipulation); the ring trails it on a spring and swells over anything
  // interactive. Both use difference blending, so they invert what is
  // beneath and stay visible on navy and white alike.
  useEffect(() => {
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!fine.matches) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    ring.innerHTML = '<span class="cursor-label">Drag</span>';
    for (const el of [dot, ring]) {
      el.setAttribute("aria-hidden", "true");
      document.body.append(el);
    }
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const target = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let frame = 0;

    const tick = () => {
      // Spring-like follow: close 22% of the gap each frame.
      ringPos.x += (target.x - ringPos.x) * 0.22;
      ringPos.y += (target.y - ringPos.y) * 0.22;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      const settled =
        Math.abs(target.x - ringPos.x) < 0.1 &&
        Math.abs(target.y - ringPos.y) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      target.x = event.clientX;
      target.y = event.clientY;
      dot.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      root.classList.add("cursor-visible");

      const el = event.target as Element;
      const typing = !!el.closest(TEXT_ENTRY);
      root.classList.toggle("cursor-text", typing);
      root.classList.toggle(
        "cursor-hover",
        !typing && !!el.closest(INTERACTIVE),
      );
      root.classList.toggle(
        "cursor-drag",
        !typing && !!el.closest("[data-slot='carousel-content']"),
      );
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onDown = () => root.classList.add("cursor-down");
    const onUp = () => root.classList.remove("cursor-down");
    const onLeave = () => root.classList.remove("cursor-visible");

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointerleave", onLeave);
      root.classList.remove(
        "has-cursor",
        "cursor-visible",
        "cursor-text",
        "cursor-hover",
        "cursor-drag",
        "cursor-down",
      );
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
