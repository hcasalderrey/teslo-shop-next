"use client"

import { QuantitySelector } from "@/components"
import { priceAR } from "@/utils"
import { useCartStore } from "@/store"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


export const ProductsInCart = () => {
    const updateProductQuantity = useCartStore((state) => state.updateProductQuantity)
    const removeProduct = useCartStore((state) => state.removeProduct)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      setLoaded(true)
    }, [])

    const productsInCart = useCartStore((state) => state.cart)

    if(!loaded){
        return <p>Espere...</p>
    }
  return (
    <>
    {productsInCart.map((product) => (
              <div className="flex mb-5" key={`${product.slug}-${product.size}`}>
                <Image
                  src={`/products/${product.image}`}
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    height: "100px",
                    width: "100px",

                  }}
                  alt={product.slug}
                  className="mr-5 rounded items-center content-center"
                />
                <div>
                  <Link href={`/product/${product.slug}`} className="hover:underline cursor-pointer mb-5">{product.size} - {product.title}</Link>
                  <p className="font-bold">{priceAR(product.price)}</p>
                  <QuantitySelector quantity={product.quantity} onQuantityChanged={quantity => updateProductQuantity(product,quantity)} />
                  <button onClick={() => removeProduct(product)} className="underline mt-3 fade-in">Remover</button>
                </div>
              </div>
            ))}
    </>
  )
}
