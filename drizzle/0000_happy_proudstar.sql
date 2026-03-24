CREATE TABLE "tb_medico" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" varchar NOT NULL,
	"sobrenome" varchar NOT NULL,
	"email" varchar NOT NULL,
	"senha" varchar NOT NULL,
	"crm" varchar NOT NULL,
	"cpf" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tb_medico_email_unique" UNIQUE("email"),
	CONSTRAINT "tb_medico_crm_unique" UNIQUE("crm"),
	CONSTRAINT "tb_medico_cpf_unique" UNIQUE("cpf")
);
