// src/types/product.ts
export interface SizeTableEntry {
  width: number;
  height: number;
  availableLengths: number[];
  pricePerMeter: number;
}

export interface Product {
  id: string;
  name: string;
  name_en: string;
  description: string;
  description_en: string;
  imageUrl: string;
  specifications: {
    delivery?: {
      value: number | string;
      unit?: string;
      label: string;
    };
    price?: {
      value: number | string;
      unit?: string;
      label: string;
    };
    [key: string]: {
      value: number | string;
      unit?: string;
      label: string;
    } | undefined;
  };
  features: string[];
  applications: string[];
  sizeTable: SizeTableEntry[];
}
