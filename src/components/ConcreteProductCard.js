// src/components/ConcreteProductCard.js
import Image from "next/image";

const ConcreteProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Specifications Table */}
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Technické parametre:</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            {Object.entries(product.specifications).map(([key, spec]) => (
              <div
                key={key}
                className="grid grid-cols-2 gap-4 py-2 border-b border-gray-200 last:border-0"
              >
                <span className="text-gray-600">{spec.label}</span>
                <span className="font-medium">
                  {spec.value} {spec.unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        {product.features && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Vlastnosti:</h4>
            <ul className="list-disc list-inside text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Price Information */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Cena za meter:</span>
            <span className="text-xl font-bold">
              {product.specifications.pricePerMeter.value} €/m
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcreteProductCard;
