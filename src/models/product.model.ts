import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

export const productModel = {
  getAll: () => prisma.product.findMany(),

  getById: (id: number) =>
    prisma.product.findUnique({
      where: { id },
    }),

  create: (data: { productName: string; price: number }) =>
    prisma.product.create({ data }),

  update: (id: number, data: { productName?: string; price?: number }) =>
    prisma.product.update({
      where: { id },
      data,
    }),

  delete: (id: number) =>
    prisma.product.delete({
      where: { id },
    }),
};
