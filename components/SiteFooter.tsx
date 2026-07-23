import Image from "next/image";
import Link from "next/link";

const explora = [
  { label: "About", href: "/about" },
  { label: "Method", href: "/method" },
  { label: "Journal", href: "/journal" },
  { label: "Resources", href: "/resources" },
  { label: "Community", href: "/community" },
  { label: "Courses", href: "/courses" },
];

const aprende = [
  { label: "Ebook", href: "/resources#ebook" },
  { label: "Guías", href: "/resources#guides" },
  { label: "Herramientas", href: "/resources#tools" },
];

const siguenos = [
  { label: "Instagram", href: "https://instagram.com/wellbrainx" },
  { label: "TikTok", href: "https://tiktok.com/@wellbrainx" },
  { label: "YouTube", href: "https://youtube.com/@wellbrainx" },
  { label: "Spotify", href: "#" },
];

const legal = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
  { label: "Términos", href: "/terminos" },
];

export function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 sm:px-10 lg:px-24">
        {/* Main row */}
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="shrink-0">
            <Image
              src="/brand/logo-wellbrain.png"
              alt="Well Brain"
              width={280}
              height={140}
              className="h-auto w-48 object-contain sm:w-56 lg:w-64"
            />
            <p className="mt-5 font-body text-sm text-ink/45 tracking-widest uppercase">
              Science meets transformation.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 sm:gap-20">
            <FooterCol title="Explora" links={explora} />
            <FooterCol title="Aprende" links={aprende} />
            <FooterCol title="Síguenos" links={siguenos} external />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-button text-xs tracking-[0.18em] text-ink/35 uppercase">
            Well Brain · © Carmen Susana {new Date().getFullYear()} · Todos los derechos reservados
          </p>
          <div className="flex gap-8">
            {legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="font-button text-xs tracking-[0.15em] text-ink/35 uppercase transition-colors duration-200 hover:text-ink/70"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  external,
}: {
  title: string;
  links: { label: string; href: string }[];
  external?: boolean;
}) {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-button text-xs tracking-[0.22em] text-ink/40 uppercase">{title}</p>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-body text-[0.95rem] text-ink underline decoration-ink/20 underline-offset-[5px] transition-all duration-200 hover:decoration-ink/70"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
