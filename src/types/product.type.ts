import { Category } from "./category.type";

export interface Product {
    id:number;
    name: string;
    price: number;
    stock: number;
    imageUrl: string;
    categorie: Category;
}