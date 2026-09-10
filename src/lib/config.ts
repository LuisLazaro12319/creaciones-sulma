/**
 * Configuración de la marca y de los canales de venta.
 *
 * Tienda 100% mayorista (sin modo minorista) — un solo número de WhatsApp.
 *
 * Formato: código de país + área sin el 0 + 9 + número sin el 15.
 * Ej: 11 5619-9449  ->  5491156199449
 */
export const WHATSAPP = {
  mayorista: "5491136111460",
} as const;

/** El mismo número que WHATSAPP.mayorista, escrito para mostrar en pantalla. */
export const TEL_MAYORISTA_VISIBLE = "+54 9 11 3611-1460";

export const MARCA = {
  nombre: "Creaciones Sulma",
  tagline: "Conjuntos · Venta por mayor",
  descripcion:
    "Conjuntos de hombre y mujer por mayor. Armá tu pedido y lo coordinamos por WhatsApp, con envíos a todo el país.",
  ubicacion: "Argentina",
  direccion: "",
  instagram: "",
  facebook: "",
  tiktok: "https://www.tiktok.com/@sulma0116",
  email: "",
} as const;

/** Cantidad mínima de prendas para acceder a precios mayoristas (1 = sin mínimo). */
export const MINIMO_MAYORISTA = 10;

/**
 * Imágenes de fondo (en /public) detrás de algunas secciones. Vacío = sin
 * fondo. La dueña las cambia desde el panel > Inicio de la web.
 */
/** Vacío = el fondo toma el color de la tienda (negro en oscuro, blanco en
 *  claro). La dueña sube su propia foto desde el panel cuando quiera. */
export const FONDOS = {
  destacados: "",
  productos: "",
  compras: "",
} as const;

/**
 * Promos / ofertas del carrusel del inicio. La dueña sube los banners desde el
 * panel. Si hay más de uno, rotan solos; al tocar uno lleva a la categoría
 * Ofertas. La imagen se muestra completa (sin recortar) sobre un fondo
 * difuminado. Vacío = no se muestra la sección.
 */
export const PROMOS: { imagen: string; titulo: string; link: string }[] = [];

/**
 * Subcarpeta desde la que se sirve el sitio ("/tapias-web" en GitHub Pages,
 * vacío en local y con dominio propio). La define el workflow de deploy.
 *
 * Hace falta para las imágenes de /public: next/image con `unoptimized` NO
 * agrega el basePath solo, así que hay que anteponerlo a mano.
 *
 * Tiene que empezar con NEXT_PUBLIC_ para que Next la incluya también en el
 * código que corre en el navegador.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * URL pública del sitio. La necesitan las etiquetas de compartir (WhatsApp,
 * Google) porque exigen direcciones absolutas.
 * El día que haya dominio propio, esto pasa a "https://tapias.com.ar".
 */
export const SITIO =
  process.env.NEXT_PUBLIC_SITIO ?? "http://localhost:3000";
