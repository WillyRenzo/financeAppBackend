-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "vc_name" VARCHAR NOT NULL,
    "vc_last_name" VARCHAR NOT NULL,
    "vc_password" VARCHAR NOT NULL,
    "vc_avatar" VARCHAR NOT NULL,
    "vc_phone" VARCHAR,
    "vc_email" VARCHAR NOT NULL,
    "dt_create" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "create_user_id" UUID,
    "dt_update" TIMESTAMP(6) NOT NULL,
    "update_user_id" UUID,
    "dt_inactivated" TIMESTAMP(6),

    CONSTRAINT "pk_users_id" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_vc_email_key" ON "users"("vc_email");
