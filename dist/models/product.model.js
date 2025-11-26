"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient();
exports.productModel = {
    getAll: () => prisma.product.findMany(),
    getById: (id) => prisma.product.findUnique({
        where: { id },
    }),
    create: (data) => prisma.product.create({ data }),
    update: (id, data) => prisma.product.update({
        where: { id },
        data,
    }),
    delete: (id) => prisma.product.delete({
        where: { id },
    }),
};
