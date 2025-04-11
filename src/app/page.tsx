"use client";
import TopProducts from "@/components/TopProducts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// src/app/page.js
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };
  return (
    <main className="min-h-screen">
      <TopProducts />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Vitajte na stránke PloBet s.r.o.
          </h1>
          <p className="text-xl text-gray-600">
            Váš spoľahlivý partner pre betónové výrobky od roku 1995
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4 mb-6">
          <p className="text-xl text-gray-600">
            Mnoho ľudí pozná betón ako šedý nezaujímavý monolitický materiál,
            ale betón má aj svoje iné tváre. Dá sa farbiť a tvarovať do rôznych
            tvarov a štruktúr pričom si zachová svoje výborné vlastnosti ako je
            pevnosť a trvácnosť. Vo firme PloBet sa snažíme maximálne využiť
            všetky vlastnosti betónu a tomu sme prispôsobili aj filozofiu firmy.
            K výrobe pristupujeme kreatívne a uprednostňujeme prvky vlastnej
            konštrukcie a dizajnu pred výrobkami, ktoré sú bežne dostupné na
            trhu.
          </p>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Originalita a kvalita</h2>
          <p className="text-xl text-gray-600">
            Chceme sa presadiť originalitou a kvalitou. Nami používané
            technológie nám umožňujú pružne reagovať na potreby našich
            zákazníkov a vyrobiť z betónu aj také výrobky, ktoré bežne na trhu
            nie sú dostupné. Tento trend chceme zachovať aj v budúcnosti a popri
            osvedčených a na trhu zavedených výrobkoch budeme aj naďalej
            prichádzať s vlastnými originálnymi návrhmi a riešeniami. Veríme že
            na našej stránke najdete nielen inšpirácie na originálne riešenia z
            betónu ale aj výrobky, ktoré Vám umožnia zvýrazniť jedinečnosť a
            originalitu Vašich plotov, chodníkov a záhrad.
          </p>
        </div>
      </section>
      {/* <section id="products" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Product Name</h3>
                <p className="text-gray-600">Description here...</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Naše výrobky v praxi
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            Pozrite si ako naše produkty skrášľujú reálne projekty našich
            zákazníkov
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal("/plobet_projects/plot_beton.jpg")}
            >
              <div className="relative h-64">
                <Image
                  src="/plobet_projects/plot_beton.jpg"
                  alt="Betónová strieška na plote"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Card 2 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal("/plobet_projects/strieskanaplote.jpeg")}
            >
              <div className="relative h-64">
                <Image
                  src="/plobet_projects/strieskanaplote.jpeg"
                  alt="Kompletné betónové oplotenie"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Card 3 */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal("/plobet_projects/dlazba_zastavka.jpg")}
            >
              <div className="relative h-64">
                <Image
                  src="/plobet_projects/dlazba_zastavka.jpg"
                  alt="Betónové prvky v záhrade"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Prezrieť všetky produkty
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={modalImage}
              alt="Modal Image"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
