// src/app/page.js
export default function Home() {
  return (
    <main className="min-h-screen">
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
        <div className="max-w-6xl mx-auto px-4">
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
      <section id="products" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Product Card */}
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Product Name</h3>
                <p className="text-gray-600">Description here...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
