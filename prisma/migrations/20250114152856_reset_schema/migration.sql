/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `UserAdmin` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "DeliveryOptions_name_key";

-- DropIndex
DROP INDEX "UserAdmin_id_key";

-- AlterTable
CREATE SEQUENCE useradmin_id_seq;
ALTER TABLE "UserAdmin" ALTER COLUMN "id" SET DEFAULT nextval('useradmin_id_seq');
ALTER SEQUENCE useradmin_id_seq OWNED BY "UserAdmin"."id";

-- CreateIndex
CREATE UNIQUE INDEX "UserAdmin_username_key" ON "UserAdmin"("username");
