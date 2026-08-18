CREATE TABLE `enquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`public_id` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`full_name` text NOT NULL,
	`company` text NOT NULL,
	`job_title` text,
	`email` text NOT NULL,
	`telephone` text,
	`postcode` text,
	`site_count` integer,
	`service` text NOT NULL,
	`fuel` text,
	`contract_end` text,
	`annual_spend` text,
	`message` text NOT NULL,
	`source_page` text NOT NULL,
	`utm_source` text,
	`utm_medium` text,
	`utm_campaign` text,
	`consent_status` text NOT NULL,
	`upload_key` text,
	`upload_name` text,
	`upload_type` text,
	`upload_size` integer,
	`status` text DEFAULT 'new' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `enquiries_public_id_unique` ON `enquiries` (`public_id`);