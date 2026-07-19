import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Palette, BookOpen, Music, Users, Shield, Sparkles, Star, UserRound } from "lucide-react";
import heroImg from "@/assets/hero-kids.jpg";
import artImg from "@/assets/activity-art.jpg";
import readImg from "@/assets/activity-read.jpg";
import playImg from "@/assets/activity-play.jpg";
import mascot from "@/assets/mascot.png";
import { branches } from "@/lib/branches";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const features = [
  { icon: Palette, title: "Sanat & Yaratıcılık", desc: "Resim, el sanatları ve yaratıcı ifade atölyeleri.", color: "bg-blossom/15 text-blossom" },
  { icon: BookOpen, title: "Erken Okuryazarlık", desc: "Hikâye saatleri ve keşif temelli okuma etkinlikleri.", color: "bg-primary/15 text-primary" },
  { icon: Music, title: "Müzik & Ritim", desc: "Enstrüman tanıma, şarkı ve dans ile gelişim.", color: "bg-sun/25 text-foreground" },
  { icon: Users, title: "Sosyal Beceriler", desc: "Paylaşma, empati ve takım oyunlarıyla arkadaşlık.", color: "bg-mint/25 text-foreground" },
  { icon: Shield, title: "Güvenli Ortam", desc: "7/24 kameralı, sertifikalı ekipmanlar ve hijyen.", color: "bg-primary/15 text-primary" },
  { icon: Heart, title: "Sevgi Odaklı", desc: "Her çocuğa özel ilgi ve duygusal destek.", color: "bg-blossom/15 text-blossom" },
];

const stats = [
  { value: "9+", label: "Yıllık deneyim" },
  { value: "480", label: "Mutlu mezun" },
  { value: "22", label: "Uzman eğitmen" },
  { value: "4.9★", label: "Veli memnuniyeti" },
];

const directors = branches.map((b) => ({
  branch: b.name,
  district: b.district,
  name: "—",
}));

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        {/* Decorative blobs */}
        <div aria-hidden className="absolute -top-24 -left-24 h-96 w-96 bg-primary/25 animate-blob blur-3xl" />
        <div aria-hidden className="absolute top-40 -right-32 h-96 w-96 bg-blossom/25 animate-blob blur-3xl" style={{ animationDelay: "3s" }} />
        <div aria-hidden className="absolute -bottom-20 left-1/3 h-80 w-80 bg-sun/30 animate-blob blur-3xl" style={{ animationDelay: "6s" }} />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-8 pb-20 lg:pt-16 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-wider">
                <span className="grid h-5 w-5 place-items-center rounded-full gradient-hero">
                  <Star className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                2026-2027 Ön Kayıtlar Açık
              </div>

              <h1 className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
                Her çocuk<br />
                <span className="gradient-text">bir yıldızdır</span>
                <span className="inline-block animate-wiggle origin-bottom ml-2">✨</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                Özel Bihter Anaokulları'nda 2–6 yaş çocukları güvenli, sevgi dolu ve
                yaratıcı bir dünyada keşfediyor, öğreniyor ve büyüyor.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/iletisim"
                  className="group inline-flex items-center gap-2 rounded-full gradient-hero px-7 py-4 text-base font-bold text-white shadow-playful hover:scale-[1.03] transition-transform"
                >
                  Hemen Ön Kayıt
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/hakkimizda"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/10 bg-card px-7 py-4 text-base font-bold hover:border-primary hover:text-primary transition-colors"
                >
                  Bizi Tanıyın
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-4 gap-4 max-w-lg">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    style={{ animationDelay: `${300 + i * 100}ms` }}
                    className="animate-fade-up"
                  >
                    <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">
                      {s.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-muted-foreground mt-1 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative animate-pop-in" style={{ animationDelay: "200ms" }}>
              <div className="relative aspect-[4/5] max-w-lg mx-auto">
                <div aria-hidden className="absolute inset-0 rounded-[3rem] gradient-hero rotate-3 shadow-playful" />
                <img
                  src={heroImg}
                  alt="Neşeyle oynayan anaokulu çocukları"
                  width={1600}
                  height={1200}
                  className="relative rounded-[3rem] w-full h-full object-cover shadow-playful -rotate-2"
                />
                {/* Floating badges */}
                <div className="absolute -top-6 -right-4 rounded-2xl bg-card border border-border p-3 shadow-playful animate-float">
                  <div className="flex items-center gap-2">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-sun/40">
                      <Palette className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Sanat Atölyesi</div>
                      <div className="text-[10px] text-muted-foreground">Her gün</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-4 rounded-2xl bg-card border border-border p-3 shadow-playful animate-float-slow">
                  <div className="flex items-center gap-2">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-mint/50">
                      <Heart className="h-5 w-5 text-blossom" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Sevgi ile büyüt</div>
                      <div className="text-[10px] text-muted-foreground">2–6 yaş</div>
                    </div>
                  </div>
                </div>
                <img
                  src={mascot}
                  alt=""
                  width={800}
                  height={800}
                  loading="lazy"
                  className="absolute -bottom-10 -right-10 w-32 sm:w-40 animate-float pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border bg-card/50 py-5 overflow-hidden">
          <div className="flex animate-marquee gap-12 whitespace-nowrap font-display text-xl sm:text-2xl font-bold">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12 items-center shrink-0">
                {["Keşfet 🔭", "Öğren 📚", "Oyna 🎨", "Paylaş 🤝", "Büyü 🌱", "Gül 😊", "Hayal Kur 💭", "Parla ✨"].map((w) => (
                  <span key={w} className="gradient-text">{w}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            Neler yapıyoruz?
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
            Öğrenmenin en <span className="gradient-text">eğlenceli</span> hâli
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Her gün yeni bir keşif, yeni bir arkadaşlık ve yeni bir başarı.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group animate-fade-up rounded-3xl border border-border bg-card p-7 hover:-translate-y-2 hover:shadow-playful transition-all duration-300"
            >
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${f.color} group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                <f.icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES GALLERY */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-block rounded-full bg-blossom/15 text-blossom px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              Bir gün bizde
            </div>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
              Renkli, hareketli, <span className="gradient-text">öğretici</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            { img: artImg, tag: "Sanat", title: "Küçük eller, büyük eserler", color: "from-blossom/40" },
            { img: readImg, tag: "Hikâye", title: "Hayal gücünün kapısı", color: "from-primary/40" },
            { img: playImg, tag: "Oyun", title: "Enerjini serbest bırak", color: "from-sun/50" },
          ].map((c, i) => (
            <div
              key={c.title}
              style={{ animationDelay: `${i * 120}ms` }}
              className="group animate-fade-up relative aspect-[4/5] overflow-hidden rounded-3xl"
            >
              <img
                src={c.img}
                alt={c.title}
                width={1200}
                height={1200}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${c.color} via-transparent to-transparent opacity-70`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="inline-block rounded-full bg-white/25 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                  {c.tag}
                </div>
                <div className="mt-3 font-display text-2xl font-bold">{c.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-8">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-hero p-10 sm:p-16 text-white shadow-playful">
          <div aria-hidden className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 animate-blob" />
          <div aria-hidden className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/10 animate-blob" style={{ animationDelay: "4s" }} />
          <div className="relative max-w-2xl">
            <Sparkles className="h-10 w-10 mb-4" />
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight">
              Çocuğunuz için en güzel başlangıç
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Okulumuzu tanımak, sınıfları gezmek ve öğretmenlerimizle tanışmak için
              ücretsiz bir ziyaret ayarlayın.
            </p>
            <Link
              to="/iletisim"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-primary hover:scale-105 transition-transform shadow-lg"
            >
              Randevu Al
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
