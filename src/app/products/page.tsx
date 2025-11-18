// src/app/products/page.tsx
"use client";
import { useState } from "react";
import productsDataRaw from "@/data/products.json";
import ConcreteProductCard from "@/components/ConcreteProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import type { Product } from "@/types/product";

const productsData = productsDataRaw as {
  categories: Array<{
    id: string;
    name: string;
    products: Product[];
  }>;
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = productsData.categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
  }));

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? productsData.categories.flatMap((cat) => cat.products)
      : productsData.categories.find((cat) => cat.id === activeCategory)
          ?.products || [];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Naše produkty</h1>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ConcreteProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Žiadne produkty neboli nájdené v tejto kategórii.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
