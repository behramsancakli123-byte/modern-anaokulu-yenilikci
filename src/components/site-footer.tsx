import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/bihter-logo.png.asset.json";
import { branches, CONTACT_EMAIL } from "@/lib/branches";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="Bihter Anaokulları" className="h-14 w-14 object-contain" />
              <div>
                <div className="font-display text-lg font-bold">Özel Bihter Anaokulları</div>
                <div className="text-xs text-muted-foreground">Her çocuk bir yıldızdır ✨</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
              2–6 yaş arası çocuklara güvenli, sevgi dolu ve yaratıcı bir öğrenme
              ortamı sunan, modern eğitim anlayışıyla hizmet veren anaokulumuz.
            </p>

            <div className="mt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Instagram
              </div>
              <div className="flex flex-wrap gap-2">
                {branches.map((b) => (
                  <a
                    key={b.key}
                    href={b.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${b.name} Instagram`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all"
                  >
                    <Instagram className="h-4 w-4" />
                    {b.key === "yildirim" ? "Yıldırım" : b.key === "kocatepe" ? "Kocatepe" : "Eyüp"}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Sayfalar
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link></li>
              <li><Link to="/hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</Link></li>
              <li><Link to="/iletisim" className="hover:text-primary transition-colors">Kayıt & İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Şubelerimiz
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              {branches.map((b) => (
                <li key={b.key} className="space-y-1">
                  <div className="flex gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">{b.name}</div>
                      <div className="text-xs leading-relaxed">{b.address}</div>
                      <a href={b.phoneHref} className="text-xs font-semibold text-primary hover:underline">
                        {b.phone}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
              <li className="flex gap-2 pt-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors break-all">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Özel Bihter Anaokulları. Tüm hakları saklıdır.</div>
          <div>Sevgi ile büyütüyoruz 💜</div>
        </div>
      </div>
    </footer>
  );
}
