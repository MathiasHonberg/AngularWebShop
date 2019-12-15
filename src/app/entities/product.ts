export class Product {
  _id: string;
  localFilter?: string; // Only used because the api cannot give me MY objects, but returns everything
  name: string
  quantity: number;
  price: number;
  
}