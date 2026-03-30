CREATE TABLE "tb_user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"senha" varchar NOT NULL,
	"role" "user_role" DEFAULT 'PATIENT',
	"address" text,
	"crm" varchar,
	"cpf" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tb_user_email_unique" UNIQUE("email"),
	CONSTRAINT "tb_user_crm_unique" UNIQUE("crm"),
	CONSTRAINT "tb_user_cpf_unique" UNIQUE("cpf")
);
