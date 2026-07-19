import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Target, Eye, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import readImg from "@/assets/activity-read.jpg";
import artImg from "@/assets/activity-art.jpg";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda — Özel Bihter Anaokulları" },
      {
        name: "description",
        content:
          "Özel Bihter Anaokulları'nın hikâyesi, misyonu ve eğitim yaklaşımı. 2–6 yaş için modern erken çocukluk eğitimi.",
      },
      { property: "og:title", content: "Hakkımızda — Özel Bihter Anaokulları" },
      { property: "og:description", content: "Sevgi, keşif ve yaratıcılık temelli eğitim yaklaşımımız." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Sevgi", desc: "Her çocuğa değer verir, güven veririz." },
  { icon: Sparkles, title: "Yaratıcılık", desc: "Hayal gücünü besleyen atölyeler." },
  { icon: Target, title: "Bütüncül Gelişim", desc: "Bilişsel, sosyal ve duygusal denge." },
  { icon: Eye, title: "Şeffaflık", desc: "Velilerle sürekli, açık iletişim." },
];

const bullets = [
  "Reggio Emilia ve Montessori esinli eğitim yaklaşımı",
  "Küçük sınıflar, çocuk başına düşen yüksek ilgi",
  "Uzman psikolog eşliğinde gelişim takibi",
  "Doğal, organik ve dengeli beslenme programı",
  "İngilizce, müzik, drama ve yoga etkinlikleri",
  "Aile katılım günleri ve atölyeler",
];

function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div aria-hidden className="absolute -top-24 right-1/4 h-80 w-80 bg-blossom/25 animate-blob blur-3xl" />
        <div aria-hidden className="absolute top-40 -left-24 h-80 w-80 bg-primary/20 animate-blob blur-3xl" style={{ animationDelay: "3s" }} />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-wider animate-fade-up">
            Hakkımızda
          </div>
          <h1 className="mt-5 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] animate-fade-up" style={{ animationDelay: "80ms" }}>
            Sevgiyle büyür, <span className="gradient-text">merakla öğreniriz</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "160ms" }}>
            9 yıldır çocukların ilk okul deneyimini bir masal gibi kurmaya çalışıyoruz.
            Öğrenmenin oyunla, oyunun sevgi ile en güzel olduğuna inanıyoruz.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative animate-pop-in">
            <div aria-hidden className="absolute inset-0 rounded-[2.5rem] gradient-hero rotate-3" />
            <img
              src={readImg}
              alt="Öğretmen çocuklara kitap okuyor"
              width={1200}
              height={1200}
              loading="lazy"
              className="relative rounded-[2.5rem] shadow-playful -rotate-2 w-full h-full object-cover"
            />
          </div>
          <div className="animate-fade-up">
            <div className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              Hikâyemiz
            </div>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl leading-tight">
              Küçük bir sınıftan büyük bir <span className="gradient-text">aileye</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Küçük bir hayalle yola çıktık. Bugün 9 yıllık deneyimimizle;
              bahçesinde neşe kaynayan, atölyelerinde renkler dans eden,
              kütüphanesinde hayaller filizlenen üç şubeli bir aile olduk.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              İnancımız çok basit: <strong className="text-foreground">her çocuk özeldir</strong>
              {" "}ve her çocuk kendi ışığıyla parlamayı hak eder. Biz sadece o ışığın
              parlamasına eşlik ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="group rounded-[2rem] border border-border bg-card p-8 sm:p-10 hover:-translate-y-2 hover:shadow-playful transition-all">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary group-hover:rotate-6 transition-transform">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold">Misyonumuz</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Çocukların meraklarını besleyen, öz güvenlerini destekleyen ve
              onlara özgür düşünme alanı sunan bir öğrenme deneyimi tasarlamak.
            </p>
          </div>
          <div className="group rounded-[2rem] border border-border bg-card p-8 sm:p-10 hover:-translate-y-2 hover:shadow-playful transition-all">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blossom/15 text-blossom group-hover:rotate-6 transition-transform">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold">Vizyonumuz</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Yarının empatik, yaratıcı ve dünyaya iyi gelen bireylerini birlikte
              yetiştirmek. Modern pedagojiyi sevgiyle buluşturmak.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block rounded-full bg-sun/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            Değerlerimiz
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
            İnandığımız <span className="gradient-text">4 şey</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              style={{ animationDelay: `${i * 80}ms` }}
              className="animate-fade-up group rounded-3xl border border-border bg-card p-6 text-center hover:-translate-y-2 transition-all"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl gradient-hero shadow-playful group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <v.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="inline-block rounded-full bg-mint/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              Neden Bihter?
            </div>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl leading-tight">
              Bir okuldan <span className="gradient-text">fazlası</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {bullets.map((b, i) => (
                <li
                  key={b}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className="animate-fade-up flex gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <span className="text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative animate-pop-in">
            <div aria-hidden className="absolute inset-0 rounded-[2.5rem] bg-sun/60 -rotate-3" />
            <img
              src={artImg}
              alt="Sanat atölyesi"
              width={1200}
              height={1200}
              loading="lazy"
              className="relative rounded-[2.5rem] shadow-playful rotate-2 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-8">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-hero p-10 sm:p-16 text-white shadow-playful text-center">
          <div aria-hidden className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 animate-blob" />
          <div aria-hidden className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/10 animate-blob" style={{ animationDelay: "4s" }} />
          <div className="relative">
            <h2 className="font-display font-bold text-4xl sm:text-5xl">
              Bize gelin, tanışalım
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
              Okulumuzu ziyaret edin, çocuğunuz için en doğru kararı birlikte verelim.
            </p>
            <Link
              to="/iletisim"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-primary hover:scale-105 transition-transform shadow-lg"
            >
              İletişime Geçin
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
