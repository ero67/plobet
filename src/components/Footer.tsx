// src/components/Footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">PLOBET</h3>
            <p className="text-gray-400 mb-4">
              Váš spoľahlivý partner pre betónové výrobky od roku 1995
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+421 948 550 767 </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+421 948 534 001</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>plobetsro@gmail.sk</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Hlavná 71/28, 044 23 Jasov,Slovensko</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Rýchle odkazy
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Domov
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Produkty
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>

            {/* <div className="mt-6">
              <h4 className="text-white text-base font-semibold mb-2">
                Otváracie hodiny
              </h4>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 mt-1" />
                <div>
                  <p>Pondelok - Piatok: 8:00 - 16:00</p>
                  <p>Sobota - Nedeľa: Zatvorené</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Location */}
          {/* <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Kde nás nájdete
            </h3>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_MAPS_EMBED_URL"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-2 text-sm">
              Nájdete nás na adrese:
              <br />
              Hlavná 71/28
              <br />
              044 23 Jasov
            </p>
          // </div>*/}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} PLOBET. Všetky práva vyhradené.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Ochrana osobných údajov
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
