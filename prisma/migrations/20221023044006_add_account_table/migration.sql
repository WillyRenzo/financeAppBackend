-- CreateTable
CREATE TABLE "accounts" (
    "id" UUID NOT NULL,
    "vc_balance" VARCHAR NOT NULL,
    "dt_create" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_user_id" UUID,
    "dt_update" TIMESTAMP(6) NOT NULL,
    "update_user_id" UUID,
    "user_id" UUID NOT NULL,

    CONSTRAINT "pk_accounts_id" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "fk_accounts_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
