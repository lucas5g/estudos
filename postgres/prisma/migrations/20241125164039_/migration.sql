-- CreateEnum
CREATE TYPE "Situacao" AS ENUM ('APROVADO', 'REPROVADO');

-- CreateTable
CREATE TABLE "Inscricao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "situacao" "Situacao" NOT NULL,

    CONSTRAINT "Inscricao_pkey" PRIMARY KEY ("id")
);
