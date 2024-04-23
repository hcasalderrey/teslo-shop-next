"use client"

import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts"
import { useEffect, useState } from "react";


 interface Props {
    slug:string;
 }


  

export const StockLabel = ({slug}:Props) => {

    const [stock, setstock] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getStock()
    }, )
    
    const getStock = async() => {
       
        const inStock = await getStockBySlug(slug)

        setstock(inStock)

        setIsLoading(false)
    }
 

  return (
    <>
        {
        isLoading
        ? (
            <h1 className={`antialiased text-xl font-bold ${titleFont.className} bg-gray-200 animate-pulse rounded`	}>&nbsp;</h1>
            ) : (
            <h1 className={`antialiased text-xl font-bold ${titleFont.className}`	}>Stock: {stock}</h1>
        )
        }
        
       

    </>
  )
}