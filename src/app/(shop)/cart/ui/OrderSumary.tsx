"use client";

import { priceAR } from "@/utils";
import { useCartStore } from "@/store"; 
import { useEffect, useState } from "react";

export const OrderSumary = () => {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      setLoaded(true)
    }, [])

  const {itemsInCart, subTotal, tax, total} = useCartStore(
    (state) => state.getSumaryInformation()
  );

  if(!loaded){
    return <p>Espere...</p>
}


  return (
    <div className="grid grid-cols-2">
      <span>No. de productos</span>
      <span className="text-right">{itemsInCart} artículos</span>

      <span>Subtotal</span>
      <span className="text-right">{priceAR(subTotal)}</span>

      <span>Impuestos (21%)</span>
      <span className="text-right">{(priceAR(tax))}</span>

      <span className="mt-5 text-2xl font-semibold">Total:</span>
      <span className="mt-5 text-2xl font-semibold text-right">{priceAR(total)}</span>
    </div>
  );
};
