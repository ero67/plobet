// src/components/ConcreteProductCard.js
import Image from "next/image";
import Link from "next/link";

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
        <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
        {/* <p className="text-gray-600 mb-4">{product.description}</p> */}

        {/* Specifications Table */}
        {/* <div className="mb-6">
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
        </div> */}

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

        {/* View Details Button */}
        <Link
          href={`/products/${product.id}`}
          className="mt-6 block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Zobraziť detaily produktu
        </Link>
      </div>
    </div>
  );
};

export default ConcreteProductCard;
