"use client"
import { useState } from "react"
import { IoAddCircleOutline , IoRemoveCircleOutline } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";
 
interface Props {
    quantity: number

}
export const QuantitySelector = ({quantity}: Props) => {
    const [count, setCount] = useState(quantity)

    const onQuantityChanged = (value: number) => {
        if((count + value) < 1) return
        setCount(count + value)
    }
  return (
    <div className="flex">
        <button onClick={() =>onQuantityChanged(-1)}><IoRemoveCircleOutline size={32} /></button>

        <span className="w-20 mx-3 px-5 bg-gray-200 text-center  content-center rounded">
            {count}
        </span>

        <button onClick={() => onQuantityChanged(+1)}><IoAddCircleOutline  size={32} /></button>


    </div>
  )
}
