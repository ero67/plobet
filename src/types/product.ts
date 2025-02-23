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
    width: {
      value: number;
      unit: string;
      label: string;
    };
    length: {
      value: number;
      unit: string;
      label: string;
    };
    height: {
      value: number;
      unit: string;
      label: string;
    };
    pricePerMeter: {
      value: number;
      unit: string;
      label: string;
    };
  };
  features: string[];
  applications: string[];
  sizeTable: SizeTableEntry[]; // Add this
}
