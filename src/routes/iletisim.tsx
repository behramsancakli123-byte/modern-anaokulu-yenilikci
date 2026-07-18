import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "Kayıt & İletişim — Özel Bihter Anaokulları" },
      {
        name: "description",
        content:
          "Özel Bihter Anaokulları'na ön kayıt formunu doldurun, sizi arayalım. Telefon, adres ve çalışma saatleri.",
      },
      { property: "og:title", content: "Kayıt & İletişim — Özel Bihter Anaokulları" },
      { property: "og:description", content: "Ön kayıt formu, iletişim bilgileri ve konum." },
    ],
  }),
  component: ContactPage,
});

const info = [
  { icon: Phone, label: "Telefon", value: "+90 (212) 000 00 00", href: "tel:+902120000000" },
  { icon: Mail, label: "E-posta", value: "merhaba@bihteranaokulu.com", href: "mailto:merhaba@bihteranaokulu.com" },
  { icon: Clock, label: "Saatler", value: "Pzt - Cum · 07:30 – 18:30" },
];

const branches = [
  {
    name: "Yıldırım Şubesi",
    address: "Yıldırım Mahallesi, Şehir Parkı Caddesi, No:17 Bayrampaşa/İstanbul",
    district: "Bayrampaşa",
    mapQuery: "Yıldırım Mahallesi Şehir Parkı Caddesi 17 Bayrampaşa İstanbul",
  },
  {
    name: "Kocatepe Şubesi",
    address: "Kocatepe Mahallesi, 32. Sokak, No:16/A Bayrampaşa/İstanbul",
    district: "Bayrampaşa",
    mapQuery: "Kocatepe Mahallesi 32. Sokak 16 Bayrampaşa İstanbul",
  },
  {
    name: "Eyüp Şubesi",
    address: "Karadolap Mahallesi, Neşeli Sokak, No:9/A Eyüpsultan/İstanbul",
    district: "Eyüpsultan",
    mapQuery: "Karadolap Mahallesi Neşeli Sokak 9 Eyüpsultan İstanbul",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div aria-hidden className="absolute -top-24 -left-24 h-80 w-80 bg-primary/25 animate-blob blur-3xl" />
        <div aria-hidden className="absolute top-40 -right-32 h-80 w-80 bg-sun/30 animate-blob blur-3xl" style={{ animationDelay: "3s" }} />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-wider animate-fade-up">
            Ön Kayıt & İletişim
          </div>
          <h1 className="mt-5 font-display font-bold text-5xl sm:text-6xl leading-[0.95] animate-fade-up" style={{ animationDelay: "80ms" }}>
            Tanışmak için <span className="gradient-text">bir adım</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "160ms" }}>
            Formu doldurun, 24 saat içinde sizi arayalım ve okulumuzu birlikte gezelim.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-16">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* FORM */}
          <div className="lg:col-span-3 rounded-[2rem] border border-border bg-card p-6 sm:p-10 shadow-playful animate-fade-up">
            <h2 className="font-display text-3xl font-bold">Ön Kayıt Formu</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Bilgileriniz güvende. Sadece sizinle iletişime geçmek için kullanılır.
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Veli Adı Soyadı" name="parent" placeholder="Adınız Soyadınız" required />
              <Field label="Telefon" name="phone" type="tel" placeholder="5xx xxx xx xx" required />
              <Field label="E-posta" name="email" type="email" placeholder="ornek@mail.com" required />
              <Field label="Çocuğun Yaşı" name="age" placeholder="Örn. 4" />
              <div className="sm:col-span-2">
                <label className="block text-sm font-bold mb-2">Mesajınız</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Sormak istedikleriniz…"
                  className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  Gönderdiğinizde ön kayıt talebiniz oluşturulur.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full gradient-hero px-7 py-4 text-base font-bold text-white shadow-playful hover:scale-[1.03] transition-transform"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Talebiniz Alındı
                    </>
                  ) : (
                    <>
                      Gönder
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* INFO */}
          <div className="lg:col-span-2 space-y-4">
            {info.map((it, i) => (
              <a
                key={it.label}
                href={it.href ?? "#"}
                style={{ animationDelay: `${i * 80}ms` }}
                className="animate-fade-up group flex items-start gap-4 rounded-3xl border border-border bg-card p-5 hover:-translate-y-1 hover:shadow-playful transition-all"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-hero text-white group-hover:rotate-6 transition-transform">
                  <it.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {it.label}
                  </div>
                  <div className="mt-1 font-semibold break-words">{it.value}</div>
                </div>
              </a>
            ))}

            <div className="rounded-3xl border border-border bg-card p-6 animate-fade-up">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Sosyal Medya
              </div>
              <div className="mt-3 flex gap-3">
                <a href="#" aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-2xl border border-border hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Facebook" className="grid h-12 w-12 place-items-center rounded-2xl border border-border hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-6 overflow-hidden rounded-[2rem] border border-border shadow-playful">
          <iframe
            title="Konum haritası"
            src="https://www.openstreetmap.org/export/embed.html?bbox=28.9784%2C41.0082%2C29.0284%2C41.0382&layer=mapnik"
            className="w-full h-[380px] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-bold mb-2">
        {label} {required && <span className="text-blossom">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition"
      />
    </div>
  );
}
