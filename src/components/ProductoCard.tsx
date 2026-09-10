"use client";

import Link from "next/link";
import Image from "next/image";
import { useTienda } from "@/context/TiendaContext";
import { PrendaPlaceholder } from "@/components/PrendaPlaceholder";
import { CintaAgotado } from "@/components/CintaAgotado";
import { CintaOferta } from "@/components/CintaOferta";
import { precio } from "@/lib/formato";
import { BASE_PATH } from "@/lib/config";
import type { Producto } from "@/lib/types";

export function ProductoCard({ producto }: { producto: Producto }) {
  const { precioDe } = useTienda();
  const valor = precioDe(producto);

  return (
    <Link
      href={`/productos/${producto.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-borde bg-superficie transition-colors hover:border-acento/60"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
          {producto.foto ? (
            <Image
              src={`${BASE_PATH}/prod/${producto.slug}.jpg`}
              alt={producto.nombre}
              width={640}
              height={800}
              className="h-full w-full object-cover"
            />
          ) : (
            <PrendaPlaceholder
              categoria={producto.categoria}
              hex={producto.colores[0].hex}
              nombre={producto.nombre}
            />
          )}
        </div>
        {producto.sinStock && <CintaAgotado />}
        {producto.oferta && !producto.sinStock && <CintaOferta />}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <h3 className="text-sm leading-snug font-medium">{producto.nombre}</h3>

        <div className="mt-auto pt-1.5">
          <p className="text-base font-semibold text-acento">{precio(valor)}</p>
          <p className="text-xs text-tenue">
            por unidad · {producto.colores.length} {producto.colores.length === 1 ? "color" : "colores"} · {producto.talles.length} talles
          </p>
        </div>
      </div>
    </Link>
  );
}
