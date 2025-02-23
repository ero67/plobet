// src/components/ProductDetail.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Length {
  length: number;
  height: number;
  pricePerMeter: number;
}

interface Variant {
  id: string;
  width: {
    value: number;
    unit: string;
  };
  availableLengths: Length[];
}

interface ProductProps {
  product: {
    name: string;
    description: string;
    imageUrl: string;
    variants: Variant[];
    features: string[];
  };
}

export default function ProductDetail({ product }: ProductProps) {
  const [selectedVariant, setSelectedVariant] = useState<string>(
    product.variants[0].id
  );
  const [selectedLength, setSelectedLength] = useState<number>(
    product.variants[0].availableLengths[0].length
  );
  const [quantity, setQuantity] = useState<number>(1);

  const currentVariant = product.variants.find((v) => v.id === selectedVariant);
  const currentLength = currentVariant?.availableLengths.find(
    (l) => l.length === selectedLength
  );

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-6">
        {/* Product Image */}
        <div className="relative h-96">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Width Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Width
            </label>
            <div className="grid grid-cols-3 gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  className={`px-4 py-2 border rounded-md ${
                    selectedVariant === variant.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                  onClick={() => {
                    setSelectedVariant(variant.id);
                    setSelectedLength(variant.availableLengths[0].length);
                  }}
                >
                  {variant.width.value} {variant.width.unit}
                </button>
              ))}
            </div>
          </div>

          {/* Length Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Length
            </label>
            <div className="grid grid-cols-2 gap-2">
              {currentVariant?.availableLengths.map((len) => (
                <button
                  key={len.length}
                  className={`px-4 py-2 border rounded-md ${
                    selectedLength === len.length
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
                  onClick={() => setSelectedLength(len.length)}
                >
                  {len.length} cm
                </button>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Specifications:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600">Width:</span>
                <span className="ml-2 font-medium">
                  {currentVariant?.width.value} {currentVariant?.width.unit}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Length:</span>
                <span className="ml-2 font-medium">{selectedLength} cm</span>
              </div>
              <div>
                <span className="text-gray-600">Height:</span>
                <span className="ml-2 font-medium">
                  {currentLength?.height} cm
                </span>
              </div>
              <div>
                <span className="text-gray-600">Price/m:</span>
                <span className="ml-2 font-medium">
                  €{currentLength?.pricePerMeter.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Quantity and Total */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity (meters)
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-24 px-3 py-2 border rounded-md"
              />
            </div>
            <div className="text-xl font-bold">
              Total: €
              {(quantity * (currentLength?.pricePerMeter || 0)).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="border-t p-6">
        <h3 className="font-semibold mb-4">Features:</h3>
        <ul className="list-disc list-inside space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="text-gray-600">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
