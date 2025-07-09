import Image from "next/image";

const topProducts = [
  {
    id: 1,
    name: "Betónová strieška",
    description:
      "Ako jedna z mála firiem na trhu ponúkame dĺžky až 270 cm na kus.",
    image: "/products/strieska_murova_dvojstranna_enhanced.png",
  },
  {
    id: 2,
    name: "Komposter",
    description:
      "Elegantné a odolné riešenie pre každého záhradkára, ktoré premení váš odpad na cenné hnojivo.",
    image: "/products/komposter.png",
  },
  {
    id: 3,
    name: "Vibroliata dlažba a obrubníky",
    description:
      "Ponúkame množstvo rôznych druhov dlažieb s rôznymi vzormi a rozmermy a obrubníky, ktoré vylepšia vzhľad vášho domova.",
    image: "/products/dlazba_terasso_velka_enhanced.png",
  },
];

export default function TopProducts() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Produkty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
