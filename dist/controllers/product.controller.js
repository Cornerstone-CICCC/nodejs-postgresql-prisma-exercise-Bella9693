"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_model_1 = require("../models/product.model");
exports.productController = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield product_model_1.productModel.getAll();
        res.json(products);
    }),
    getById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const product = yield product_model_1.productModel.getById(id);
        res.json(product);
    }),
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { productName, price } = req.body;
        const newProduct = yield product_model_1.productModel.create({ productName, price });
        res.json(newProduct);
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const { productName, price } = req.body;
        const updated = yield product_model_1.productModel.update(id, { productName, price });
        res.json(updated);
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const removed = yield product_model_1.productModel.delete(id);
        res.json(removed);
    }),
};
