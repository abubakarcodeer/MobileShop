import Link from "next/link";

export const metadata = {
  title: "Help Centre",
  description: "About MobileShop, shipping, returns and exchanges, warranty, compatibility and frequently asked questions.",
};

// Starter copy: review every policy below before launch so it matches how the store really operates.
const SECTIONS = [
  {
    id: "about",
    title: "About Us",
    body: [
      "MobileShop brings the latest smartphones, tablets, laptops, smartwatches and accessories from the world’s top brands together in one place. Every device we sell is 100% genuine, brand new and sealed in its original box.",
      "We are tech fans ourselves, so we test, pack and ship every order the way we would want to receive it, and our team is always happy to help you choose.",
    ],
  },
  {
    id: "shipping",
    title: "Shipping Policy",
    list: [
      "Orders are dispatched within 1 working day.",
      "Standard delivery takes 2–4 working days. You will get a confirmation message once your order ships.",
      "Delivery is free above the threshold shown in your cart; a flat fee applies below it.",
      "Every parcel is insured and requires a signature on delivery.",
    ],
  },
  {
    id: "returns",
    title: "Return Policy",
    list: [
      "Return or exchange any unopened device within 7 days of delivery.",
      "Opened devices can be returned within 7 days only if they are faulty (dead on arrival).",
      "Items must come back with the box, all accessories, manuals and the invoice.",
      "Contact us with your order number to start a return.",
    ],
  },
  {
    id: "compatibility",
    title: "Compatibility",
    body: ["Not sure an accessory will work with your device? Use the table below as a quick guide, or message us before ordering."],
    table: [
      ["Accessory", "Works with", "Check"],
      ["USB-C chargers", "iPhone 15 and later, Android, iPad, MacBook", "Wattage supported"],
      ["MagSafe", "iPhone 12 and later", "Case must be MagSafe"],
      ["Bluetooth earbuds", "All phones and laptops", "Some features brand-only"],
      ["Smartwatches", "Apple Watch: iPhone only", "Galaxy Watch: Android only"],
    ],
  },
  {
    id: "warranty",
    title: "Warranty",
    list: [
      "Every device carries the official manufacturer warranty (usually 1 year) from the date of delivery.",
      "Accidental damage, liquid damage and screen breakage are not covered.",
      "Keep your order confirmation and invoice: they are your proof of purchase for any claim.",
    ],
  },
  {
    id: "faq",
    title: "FAQs",
    faqs: [
      ["Are your products genuine?", "Yes. Every device is sourced from authorised distributors and ships sealed, with its original box, accessories and serial number."],
      ["How do I track my order?", "Sign in and open My Account to see the live status of every order you have placed."],
      ["Can I change or cancel an order?", "Contact us as soon as possible. Orders can be changed until they are marked as shipped."],
      ["Do phones come unlocked?", "Yes. Every phone we sell is factory unlocked and works with any carrier."],
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="container py-10 md:py-14">
      <div className="rounded-3xl bg-gradient-to-r from-navy to-brand-ink px-6 py-10 text-center text-white md:py-12">
        <p className="eyebrow text-accent">Customer Service</p>
        <h1 className="mt-2 text-3xl md:text-[40px]">Help Centre</h1>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Help topics" className="lg:sticky lg:top-28 lg:self-start">
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="block rounded-lg border border-line px-3.5 py-2 text-[13px] font-medium transition hover:border-brand hover:text-brand lg:border-0">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-3xl space-y-12">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-2xl">{s.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/80">
                {s.body?.map((p) => <p key={p}>{p}</p>)}
                {s.list && (
                  <ul className="space-y-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.table && (
                  <div className="overflow-x-auto rounded-xl border border-line">
                    <table className="w-full min-w-[420px] text-left">
                      <thead className="bg-cloud text-xs uppercase tracking-wider text-muted">
                        <tr>{s.table[0].map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
                      </thead>
                      <tbody>
                        {s.table.slice(1).map((row) => (
                          <tr key={row[0]} className="border-t border-line">
                            {row.map((cell) => <td key={cell} className="px-4 py-3">{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.faqs && (
                  <dl className="divide-y divide-line border-y border-line">
                    {s.faqs.map(([q, a]) => (
                      <div key={q} className="py-4">
                        <dt className="font-semibold text-ink">{q}</dt>
                        <dd className="mt-1.5">{a}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </section>
          ))}

          <p className="rounded-2xl bg-mist p-6 text-sm">
            Still need help?{" "}
            <Link href="/contact" className="font-semibold text-brand link-underline">Contact our team</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
