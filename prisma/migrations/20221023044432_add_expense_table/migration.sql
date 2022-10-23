-- CreateTable
CREATE TABLE "expenses" (
    "id" UUID NOT NULL,
    "vc_description" VARCHAR NOT NULL,
    "vc_type" VARCHAR NOT NULL,
    "dt_create" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_user_id" UUID,
    "account_id" UUID NOT NULL,
    "bl_is_revenue" BOOLEAN NOT NULL,
    "bl_is_expense" BOOLEAN NOT NULL,

    CONSTRAINT "pk_expenses_id" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "fk_expenses_account_id" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
