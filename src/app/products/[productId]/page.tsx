// src/app/products/[productId]/page.tsx
import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";
import { notFound } from "next/navigation";
import type { Product } from "@/types/product";
import ContactForm from "@/components/ContactForm";
import { Phone } from "lucide-react";
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = productsData.categories
    .flatMap((category) => category.products)
    .find((p) => p.id === productId) as Product | undefined;

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/products" className="text-blue-600 hover:text-blue-800">
            ← Späť na produkty
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Product Header */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-96">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              {/* Basic specifications */}
              <div className="bg-gray-50 rounded-lg p-4">
                {Object.entries(product.specifications).map(([key, spec]) => (
                  <div key={key} className="grid grid-cols-2 gap-4 py-2">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-medium">
                      {spec.value} {spec.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Size Table */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Dostupné rozmery a ceny</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-3 text-left">Šírka (cm)</th>
                    <th className="border p-3 text-left">Výška (cm)</th>
                    <th className="border p-3 text-left">
                      Štandardné dĺžky (cm)
                    </th>
                    <th className="border p-3 text-left">Cena za meter</th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizeTable?.map((size, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border p-3">{size.width}</td>
                      <td className="border p-3">{size.height}</td>
                      <td className="border p-3">
                        {size.availableLengths.join(" / ")}
                      </td>
                      <td className="border p-3">
                        {size.pricePerMeter.toFixed(2)} €/m
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Features */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Vlastnosti produktu</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.features?.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Placeholder */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Dodatočné informácie</h2>
            {product.id.includes("strieska") && (
              <p className="text-gray-600">
                Dĺžky striešok sa dajú prispôsobiť na mieru, avšak v takom
                prípade sa účtuje príplatok vo výške 20% z ceny.
              </p>
            )}
            {product.id.includes("klobuk") && (
              <p className="text-gray-600">
                Po dohode je možné dĺžky klobúkov upraviť na vami žiadaný
                rozmer.
              </p>
            )}
          </div>
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">
              Máte záujem o tento produkt?
            </h2>
            <ContactForm productName={product.name} />
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-blue-900">
              Alebo nám zavolajte
            </h3>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-blue-800"></p>
            <p className="text-lg font-semibold text-blue-900">
              +421 948 550 767
            </p>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-blue-800"></p>
            <p className="text-lg font-semibold text-blue-900">
              +421 948 534 001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
