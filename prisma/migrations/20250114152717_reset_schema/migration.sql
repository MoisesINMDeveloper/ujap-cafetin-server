-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "images" TEXT[],
    "description" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paydates" (
    "id" SERIAL NOT NULL,
    "bank" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "cedula" INTEGER NOT NULL,
    "phone" INTEGER NOT NULL,

    CONSTRAINT "Paydates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAdmin" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryOptions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fee" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DeliveryOptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAdmin_id_key" ON "UserAdmin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryOptions_name_key" ON "DeliveryOptions"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
