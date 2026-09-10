import type { Categoria, Producto } from "@/lib/types";

/**
 * ⚠️ DEMO: productos y precios de EJEMPLO (conjuntos), para que la maqueta se
 * vea creíble. Creaciones Sulma los reemplaza por sus modelos reales y sube
 * las fotos desde el panel. Por eso van con `foto: false` (se muestra la
 * silueta) hasta que carguen las imágenes reales.
 */

const TALLES_ADULTO = ["S", "M", "L", "XL"];
const TALLES_AMPLIO = ["S", "M", "L", "XL", "XXL"];

const NEGRO = { nombre: "Negro", hex: "#1c1c1c" };
const GRIS = { nombre: "Gris melange", hex: "#8a8a8a" };
const BEIGE = { nombre: "Beige", hex: "#d8c4a8" };
const BORDO = { nombre: "Bordó", hex: "#7a2e2e" };
const VERDE_MILITAR = { nombre: "Verde militar", hex: "#4b5a3a" };
const AZUL_MARINO = { nombre: "Azul marino", hex: "#22304a" };
const ROSA_VIEJO = { nombre: "Rosa viejo", hex: "#c4909a" };

export const productos: Producto[] = [
  {
    slug: "conjunto-mujer-oversize",
    nombre: "Conjunto Mujer Oversize",
    categoria: "conjunto-mujer",
    descripcion:
      "Conjunto de buzo oversize + jogger de mujer, en friza premium. Combo con mucha salida por su calce cómodo.",
    detalle: "Friza premium · Calce oversize · Buzo + jogger",
    precioMinorista: 28000,
    precioMayorista: 16000,
    talles: TALLES_ADULTO,
    colores: [BEIGE, GRIS, ROSA_VIEJO],
    destacado: true,
    foto: true,
  },
  {
    slug: "conjunto-mujer-corto",
    nombre: "Conjunto Mujer Top y Calza",
    categoria: "conjunto-mujer",
    descripcion:
      "Conjunto de top corto y calza de mujer, tela con elastano. Ideal para uso diario o entrenamiento.",
    detalle: "Algodón con elastano · Calce ajustado · Top + calza",
    precioMinorista: 24000,
    precioMayorista: 14000,
    talles: TALLES_ADULTO,
    colores: [NEGRO, BORDO, ROSA_VIEJO],
    oferta: true,
    foto: false,
  },
  {
    slug: "conjunto-hombre-jogger",
    nombre: "Conjunto Hombre Buzo y Jogger",
    categoria: "conjunto-hombre",
    descripcion:
      "Conjunto de buzo canguro con capucha y jogger de hombre, en friza gruesa. El básico más pedido.",
    detalle: "Friza gruesa · Capucha · Buzo + jogger",
    precioMinorista: 30000,
    precioMayorista: 17000,
    talles: TALLES_AMPLIO,
    colores: [NEGRO, GRIS, AZUL_MARINO],
    destacado: true,
    foto: true,
  },
  {
    slug: "conjunto-hombre-deportivo",
    nombre: "Conjunto Hombre Deportivo",
    categoria: "conjunto-hombre",
    descripcion:
      "Conjunto deportivo de hombre, campera liviana y pantalón jogger. Tela liviana, ideal para entrenar.",
    detalle: "Tela liviana antitranspirante · Campera + jogger",
    precioMinorista: 32000,
    precioMayorista: 18000,
    talles: TALLES_AMPLIO,
    colores: [NEGRO, VERDE_MILITAR, AZUL_MARINO],
    foto: false,
  },
  {
    slug: "buzo-canguro-unisex",
    nombre: "Buzo Canguro Unisex",
    categoria: "buzo",
    descripcion:
      "Buzo canguro con capucha, bolsillo frontal y puños de friza. Corte unisex, alta rotación todo el año.",
    detalle: "Friza premium · Capucha · Bolsillo canguro",
    precioMinorista: 20000,
    precioMayorista: 12000,
    talles: TALLES_AMPLIO,
    colores: [NEGRO, GRIS, BEIGE, BORDO],
    destacado: true,
    foto: true,
  },
  {
    slug: "buzo-cuello-redondo",
    nombre: "Buzo Cuello Redondo",
    categoria: "buzo",
    descripcion:
      "Buzo básico de cuello redondo, sin capucha. El clásico que nunca falta en el local.",
    detalle: "Friza liviana · Cuello redondo · Puños elastizados",
    precioMinorista: 18000,
    precioMayorista: 11000,
    talles: TALLES_ADULTO,
    colores: [NEGRO, GRIS, VERDE_MILITAR],
    oferta: true,
    foto: false,
  },
  {
    slug: "jogger-friza",
    nombre: "Jogger de Friza",
    categoria: "jogging",
    descripcion:
      "Pantalón jogger de friza con puño elastizado en el tobillo y bolsillos laterales. Muy buena rotación.",
    detalle: "Friza · Puño elastizado · Bolsillos laterales",
    precioMinorista: 17000,
    precioMayorista: 10000,
    talles: TALLES_ADULTO,
    colores: [NEGRO, GRIS, AZUL_MARINO],
    foto: false,
  },
  {
    slug: "jogger-cargo",
    nombre: "Jogger Cargo",
    categoria: "jogging",
    descripcion:
      "Jogger cargo con bolsillos laterales tipo cargo, puño elastizado. Corte urbano con mucha demanda.",
    detalle: "Gabardina liviana · Bolsillos cargo · Puño elastizado",
    precioMinorista: 19000,
    precioMayorista: 11500,
    talles: TALLES_AMPLIO,
    colores: [VERDE_MILITAR, BEIGE, NEGRO],
    foto: false,
  },
  {
    slug: "campera-rompeviento",
    nombre: "Campera Rompeviento",
    categoria: "campera",
    descripcion:
      "Campera liviana rompeviento con cierre y capucha, ideal para entretiempo. Buena salida en temporada de frío.",
    detalle: "Tela impermeable liviana · Capucha · Cierre frontal",
    precioMinorista: 26000,
    precioMayorista: 15000,
    talles: TALLES_AMPLIO,
    colores: [NEGRO, AZUL_MARINO, BORDO],
    destacado: true,
    foto: true,
  },
  {
    slug: "campera-friza",
    nombre: "Campera de Friza",
    categoria: "campera",
    descripcion:
      "Campera de friza gruesa con cierre y cuello alto. Para los días más fríos, alta demanda en invierno.",
    detalle: "Friza gruesa · Cuello alto · Cierre frontal",
    precioMinorista: 29000,
    precioMayorista: 17500,
    talles: TALLES_ADULTO,
    colores: [NEGRO, GRIS],
    sinStock: true,
    foto: false,
  },
];

export const CATEGORIAS: { id: Categoria; nombre: string }[] = [
  { id: "conjunto-mujer", nombre: "Conjuntos Mujer" },
  { id: "conjunto-hombre", nombre: "Conjuntos Hombre" },
  { id: "buzo", nombre: "Buzos" },
  { id: "jogging", nombre: "Joggers" },
  { id: "campera", nombre: "Camperas" },
];

export function getProducto(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}
