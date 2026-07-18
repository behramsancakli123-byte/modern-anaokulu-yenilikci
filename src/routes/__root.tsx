import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-8xl font-display font-black gradient-text">404</div>
        <h1 className="mt-4 text-2xl font-display font-bold">Aradığın sayfa uçmuş olabilir 🎈</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Bu sayfa mevcut değil ya da taşınmış olabilir.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-full gradient-hero px-6 py-3 text-sm font-bold text-white shadow-playful hover:scale-105 transition-transform"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display font-bold">Sayfa yüklenemedi</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Bir sorun oluştu. Sayfayı yenilemeyi veya ana sayfaya dönmeyi deneyin.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full gradient-hero px-5 py-2.5 text-sm font-bold text-white"
          >
            Tekrar dene
          </button>
          <a href="/" className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold">
            Ana sayfa
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Özel Bihter Anaokulları — Modern & Sevgi Dolu Erken Çocukluk Eğitimi" },
      {
        name: "description",
        content:
          "3–6 yaş arası çocuklar için modern, yaratıcı ve güvenli bir anaokulu deneyimi. Özel Bihter Anaokulları'nda her çocuk keşfeder, büyür ve parlar.",
      },
      { name: "author", content: "Özel Bihter Anaokulları" },
      { property: "og:title", content: "Özel Bihter Anaokulları — Modern & Sevgi Dolu Erken Çocukluk Eğitimi" },
      { property: "og:description", content: "3–6 yaş arası çocuklar için modern, yaratıcı ve güvenli bir anaokulu deneyimi. Özel Bihter Anaokulları'nda her çocuk keşfeder, büyür ve parlar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Özel Bihter Anaokulları — Modern & Sevgi Dolu Erken Çocukluk Eğitimi" },
      { name: "twitter:description", content: "3–6 yaş arası çocuklar için modern, yaratıcı ve güvenli bir anaokulu deneyimi. Özel Bihter Anaokulları'nda her çocuk keşfeder, büyür ve parlar." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d19ff9c9-afaf-45d1-b16b-ddc692ca81aa/id-preview-529fb9fd--17306162-bf22-4d19-b4ae-455cb309ed2e.lovable.app-1784417450043.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d19ff9c9-afaf-45d1-b16b-ddc692ca81aa/id-preview-529fb9fd--17306162-bf22-4d19-b4ae-455cb309ed2e.lovable.app-1784417450043.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
