"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { submitEnquiry } from "@/actions/enquiries/actions";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type EnquiryStatus = "idle" | "sending" | "success" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<EnquiryStatus>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const query = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign"].forEach((key) =>
      data.set(key, query.get(key) ?? ""),
    );
    data.set("service", "General enquiry");
    data.set("initialInterest", query.get("service") ?? "");
    setStatus("sending");
    setMessage("");

    try {
      const result = await submitEnquiry(data);
      if (!result.ok) throw new Error(result.error);
      setStatus("success");
      setMessage(result.message);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your message. Please try again.",
      );
    }
  }

  return (
    <form
      className="enquiry-form"
      onSubmit={submit}
      encType="multipart/form-data"
    >
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this blank
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-grid two">
        <label>
          Name
          <Input name="fullName" autoComplete="name" required />
        </label>
        <label>
          Company name (optional)
          <Input name="company" autoComplete="organization" />
        </label>
        <label>
          Email
          <Input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone (optional)
          <Input name="telephone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        Message
        <Textarea
          name="message"
          rows={5}
          placeholder="How can we help?"
          required
        />
      </label>
      <label className="file-field">
        Attachment (optional) <span>PDF, JPG or PNG · maximum 3 MB</span>
        <input
          name="bill"
          type="file"
          accept="application/pdf,image/jpeg,image/png"
        />
      </label>
      <label className="consent">
        <Checkbox name="consent" value="yes" required />
        <span>
          I agree that SwitchtoZero Ltd may use these details to respond to this
          enquiry. See the <Link href="/privacy">privacy policy</Link>.
        </span>
      </label>
      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
      <p className={`form-status ${status}`} aria-live="polite">
        {message}
      </p>
    </form>
  );
}
