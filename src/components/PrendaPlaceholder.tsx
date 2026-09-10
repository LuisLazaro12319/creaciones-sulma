import type { Categoria } from "@/lib/types";

/**
 * Silueta de la prenda que se muestra mientras no haya fotos reales.
 * Cuando lleguen las fotos, este componente se reemplaza por <Image />
 * y no hay que tocar nada más.
 */
const SILUETAS: Record<Categoria, React.ReactNode> = {
  "conjunto-mujer": (
    <>
      <path d="M35 14 L65 14 L62 34 L38 34 Z" />
      <path d="M35 14 L25 24 L30 30 L38 22 Z" />
      <path d="M65 14 L75 24 L70 30 L62 22 Z" />
      <path d="M38 40 L62 40 L68 90 L54 90 L50 60 L46 90 L32 90 Z" />
    </>
  ),
  "conjunto-hombre": (
    <>
      <path d="M42 10 Q50 2 58 10" />
      <path d="M30 14 L70 14 L74 40 L26 40 Z" />
      <path d="M30 16 L18 30 L24 36 L34 24 Z" />
      <path d="M70 16 L82 30 L76 36 L66 24 Z" />
      <path d="M34 46 L66 46 L64 86 L54 86 L50 62 L46 86 L36 86 Z" />
    </>
  ),
  buzo: (
    <>
      <path d="M38 20 Q50 4 62 20" />
      <path d="M28 20 L72 20 L76 88 L24 88 Z" />
      <path d="M28 22 L14 42 L22 50 L34 32 Z" />
      <path d="M72 22 L86 42 L78 50 L66 32 Z" />
      <path d="M40 60 L60 60 L60 72 L40 72 Z" />
    </>
  ),
  jogging: (
    <>
      <path d="M30 14 L70 14 L74 80 L58 80 L54 50 L46 50 L42 80 L26 80 Z" />
      <path d="M42 80 L58 80 L58 90 L42 90 Z" />
      <path d="M30 22 L70 22" />
    </>
  ),
  campera: (
    <>
      <path d="M30 16 L70 16 L74 90 L26 90 Z" />
      <path d="M40 16 L50 26 L60 16" />
      <path d="M50 26 L50 90" />
      <path d="M30 18 L16 40 L24 48 L36 30 Z" />
      <path d="M70 18 L84 40 L76 48 L64 30 Z" />
    </>
  ),
};

export function PrendaPlaceholder({
  categoria,
  hex,
  nombre,
}: {
  categoria: Categoria;
  hex: string;
  nombre: string;
}) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: hex }}
      role="img"
      aria-label={`${nombre} — imagen de referencia`}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-3/5 w-3/5 opacity-25 mix-blend-luminosity"
        fill="none"
        stroke="#000"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {SILUETAS[categoria]}
      </svg>
      <span className="pointer-events-none absolute bottom-2 right-2.5 text-[9px] font-medium uppercase tracking-widest text-black/35">
        sin foto
      </span>
    </div>
  );
}
