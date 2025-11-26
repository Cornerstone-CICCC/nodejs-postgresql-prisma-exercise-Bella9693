import { Request, Response } from "express";
import { productModel } from "../models/product.model";

export const productController = {
  getAll: async (req: Request, res: Response) => {
    const products = await productModel.getAll();
    res.json(products);
  },

  getById: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const product = await productModel.getById(id);
    res.json(product);
  },

  create: async (req: Request, res: Response) => {
    const { productName, price } = req.body;
    const newProduct = await productModel.create({ productName, price });
    res.json(newProduct);
  },

  update: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { productName, price } = req.body;
    const updated = await productModel.update(id, { productName, price });
    res.json(updated);
  },

  delete: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const removed = await productModel.delete(id);
    res.json(removed);
  },
};
