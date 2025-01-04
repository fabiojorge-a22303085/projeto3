/* models/interface.ts */

export interface Municipality {
    id: string;
    name: string;
    district_name: string;
}



export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  