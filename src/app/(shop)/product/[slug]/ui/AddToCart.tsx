"use client"
import { useState } from "react"

import { QuantitySelector, SizeSelector } from "@/components"
import { Product, Size } from "@/interfaces"
import { useCartStore } from "@/store"
import { CartProduct } from '../../../../../interfaces/product.interface';
import { priceAR } from '../../../../../utils/priceAR';

 interface Props {
    product: Product
}

export const AddToCart = ({product}:Props) => {


    const addProductToCart = useCartStore((state) => state.addProductToCart)

    const [size, setSize] = useState<Size | undefined>()
    const [quantity, setQuantity] = useState<number>(1)
    const [posted, setPosted] = useState(false)

    const onAddToCart = () => {
        setPosted(true)
        if(!size) return
        //console.log({quantity, size})

        const cartProduct: CartProduct = {
            id: product.id,
            quantity: quantity,
            slug: product.slug,
            title: product.title,
            price: product.price,
            size: size,
            image: product.images[0]
        }

        addProductToCart(cartProduct)

        setPosted(false)
        setQuantity(1)
        setSize(undefined)
        
    }
    //if(quantity>product.inStock) setQuantity(product.inStock)

  return (
    <>
    {
        posted && !size && 
        ( <span className="text-red-500 mt-2 fade-in">
                Debe de seleccionar un talle *
            </span>)
    }
   
     {/* Selector de talles */}
         <SizeSelector selectedSize={size} availableSizes={product.sizes} onSizeChanged={setSize}/>

        {/* Selector de cantidad */}

        <QuantitySelector quantity ={quantity} onQuantityChanged={setQuantity}/>
        {/* Boton agregar al carrito */}
        <button onClick={onAddToCart} className="btn-primary my-5 ">Agregar al Carrito</button>

    </>
  )
}
