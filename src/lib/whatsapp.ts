import { MARCA, WHATSAPP, MINIMO_MAYORISTA } from "@/lib/config";
import { precio } from "@/lib/formato";
import type { Producto } from "@/lib/types";

type LineaPedido = {
  producto: Producto;
  talle: string;
  color: string;
  cantidad: number;
  unitario: number;
  subtotal: number;
};

/**
 * Arma el texto del pedido y devuelve el link de WhatsApp ya listo.
 * Tienda 100% mayorista: siempre va al número mayorista.
 */
export function linkPedido(lineas: LineaPedido[], total: number): string {
  const encabezado = `¡Hola ${MARCA.nombre}! Quiero hacer un *pedido MAYORISTA*`;

  const detalle = lineas
    .map(
      (l) =>
        `• ${l.producto.nombre}\n  Talle ${l.talle} · ${l.color} · x${l.cantidad}` +
        `\n  ${precio(l.unitario)} c/u = ${precio(l.subtotal)}`,
    )
    .join("\n\n");

  const unidades = lineas.reduce((acc, l) => acc + l.cantidad, 0);

  const cierre =
    `Total: *${precio(total)}* (${unidades} unidades)\n\n` +
    `Mínimo mayorista: ${MINIMO_MAYORISTA} unidades ✅\n` +
    `Quedo atento para coordinar pago y envío.`;

  const mensaje = `${encabezado}\n\n${detalle}\n\n${cierre}`;

  return `https://wa.me/${WHATSAPP.mayorista}?text=${encodeURIComponent(mensaje)}`;
}

/** Link para consultar por un producto puntual, desde la ficha. */
export function linkConsulta(producto: Producto): string {
  const mensaje = `¡Hola ${MARCA.nombre}! Quería consultar por *${producto.nombre}* (precio mayorista).`;
  return `https://wa.me/${WHATSAPP.mayorista}?text=${encodeURIComponent(mensaje)}`;
}
