// src/app/privacy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Ochrana osobných údajov</h1>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">
              1. Základné ustanovenia
            </h2>
            <p className="text-gray-700">
              Prevádzkovateľom osobných údajov podľa čl. 4 bod 7 nariadenia
              Európskeho parlamentu a Rady (EÚ) 2016/679 o ochrane fyzických
              osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto
              údajov (ďalej len GDPR) je spoločnosť Plobet s.r.o. (ďalej len
              prevádzkovatel)
            </p>
            <p className="text-gray-700 mt-2">
              Kontaktné údaje prevádzkovateľa:
              <br />
              Adresa: Hlavná 71/28, 044 23 Jasov,Slovensko
              <br />
              Email: info@plobet.sk
              <br />
              Telefón: +421 948 550 767, +421 948 534 001
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              2. Aké osobné údaje spracúvame
            </h2>
            <p className="text-gray-700">Spracúvame tieto osobné údaje:</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Meno a priezvisko</li>
              <li>E-mailová adresa</li>
              <li>Telefónne číslo (ak ho poskytnete)</li>
              <li>Obsah správy, ktorú nám pošlete</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              3. Účel spracovania osobných údajov
            </h2>
            <p className="text-gray-700">
              Vaše osobné údaje spracúvame za účelom:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Vybavenia vašej žiadosti alebo otázky</li>
              <li>Komunikácie s vami ohľadom našich produktov a služieb</li>
              <li>Poskytnutia požadovaných informácií</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              4. Doba uchovávania údajov
            </h2>
            <p className="text-gray-700">
              Osobné údaje uchovávame po dobu potrebnú na splnenie účelu, pre
              ktorý boli získané, zvyčajne po dobu trvania komunikácie a
              následne ešte 3 roky po jej ukončení z dôvodu oprávneného záujmu
              prevádzkovateľa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              5. Príjemcovia osobných údajov
            </h2>
            <p className="text-gray-700">
              K vašim osobným údajom môžu mať prístup nasledujúce kategórie
              našich partnerov (príjemcov):
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Poskytovatelia IT služieb a hostingu</li>
              <li>
                Poskytovatelia služieb elektronickej komunikácie (EmailJS)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Vaše práva</h2>
            <p className="text-gray-700">
              Za podmienok stanovených v GDPR máte:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Právo na prístup k svojim osobným údajom</li>
              <li>Právo na opravu osobných údajov</li>
              <li>Právo na obmedzenie spracúvania</li>
              <li>Právo namietať proti spracúvaniu</li>
              <li>Právo na výmaz osobných údajov</li>
              <li>Právo na prenosnosť údajov</li>
              <li>
                Právo odvolať súhlas so spracovaním písomne alebo elektronicky
                na adresu alebo email prevádzkovateľa
              </li>
              <li>
                Právo podať sťažnosť na Úrad na ochranu osobných údajov SR
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              7. Bezpečnosť a ochrana osobných údajov
            </h2>
            <p className="text-gray-700">
              Vaše osobné údaje sú u nás v bezpečí. Aby sme zamedzili
              neoprávnenému prístupu a zneužitiu vašich osobných údajov,
              zaviedli sme primerané opatrenia ako technického, tak
              organizačného rázu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              8. Záverečné ustanovenia
            </h2>
            <p className="text-gray-700">
              Odoslaním kontaktného formulára potvrdzujete, že ste oboznámený s
              podmienkami ochrany osobných údajov a že ich v celom rozsahu
              prijímate.
            </p>
            <p className="text-gray-700 mt-2">
              Prevádzkovateľ si vyhradzuje právo tieto podmienky zmeniť.
              Aktuálna verzia podmienok je vždy zverejnená na tejto stránke.
            </p>
            <p className="text-gray-700 mt-2">
              Táto Ochrana osobných údajov nadobúda účinnosť dňom 6.4.2025.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
