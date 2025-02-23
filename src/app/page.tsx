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
            Your trusted partner in industrial solutions
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
