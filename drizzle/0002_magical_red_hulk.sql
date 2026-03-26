ALTER TABLE "tb_medico" RENAME TO "tb_usuario";--> statement-breakpoint
ALTER TABLE "tb_usuario" DROP CONSTRAINT "tb_medico_email_unique";--> statement-breakpoint
ALTER TABLE "tb_usuario" DROP CONSTRAINT "tb_medico_crm_unique";--> statement-breakpoint
ALTER TABLE "tb_usuario" DROP CONSTRAINT "tb_medico_cpf_unique";--> statement-breakpoint
ALTER TABLE "tb_usuario" ADD CONSTRAINT "tb_usuario_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "tb_usuario" ADD CONSTRAINT "tb_usuario_crm_unique" UNIQUE("crm");--> statement-breakpoint
ALTER TABLE "tb_usuario" ADD CONSTRAINT "tb_usuario_cpf_unique" UNIQUE("cpf");