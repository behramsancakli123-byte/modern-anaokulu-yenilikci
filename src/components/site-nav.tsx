import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/iletisim", label: "Kayıt & İletişim" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between py-3">
          <Link to="/" className="group flex items-center gap-2.5 min-w-0">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl gradient-hero shadow-playful transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
              <Sparkles className="h-5 w-5 text-white" strokeWidth={2.5} />
            </span>
            <div className="min-w-0 leading-tight">
              <div className="font-display text-lg font-bold truncate">Özel Bihter</div>
              <div className="text-[11px] text-muted-foreground -mt-0.5 truncate">
                Anaokulları
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-card/60 backdrop-blur-md p-1.5">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    active
                      ? "text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full gradient-hero -z-0" />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background hover:bg-primary transition-colors"
            >
              Ön Kayıt
            </Link>
          </div>

          <button
            aria-label="Menü"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-11 w-11 place-items-center rounded-2xl bg-card border border-border"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 mb-4 rounded-3xl border border-border bg-card p-3 shadow-playful">
          <nav className="flex flex-col">
            {links.map((l, i) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={`animate-fade-up px-4 py-3 text-base font-semibold rounded-2xl transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              to="/iletisim"
              className="mt-2 rounded-2xl gradient-hero px-4 py-3 text-center text-base font-bold text-white"
            >
              Hemen Ön Kayıt Ol
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
