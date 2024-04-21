import Link from "next/link";
 
import { initialData } from "@/seed/seed";
import Image from "next/image";
import {   Title } from "@/components";
import { priceAR } from "@/interfaces";
import clsx from "clsx";
import { IoCardOutline, IoCartOutline } from 'react-icons/io5';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;

  //TODO: verificar
  //redirect('/')

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <div className={
                clsx(
                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                    {
                        "bg-red-500": false,
                        "bg-green-700": true,
                    }
                )
            }>
                <IoCardOutline size={30} />
                {/*<span className="mx-2">Pendiente de pago</span>*/}
                <span className="mx-2">Pago confirmado</span>

            </div>
 

            {productsInCart.map((product) => (
              <div className="flex mb-5" key={product.slug}>
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    height: "100px",
                    width: "100px",

                  }}
                  alt={product.title}
                  className="mr-5 rounded items-center content-center"
                />
                <div>
                  <p className="mb-5">{product.title}</p>
                  <p className="font-bold">{priceAR(product.price)} x 3</p>
                  
                  <button className="underline mt-3">Subtotal: {priceAR(product.price * 3 )}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-7 shadow-xl">

                <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>

                <div className="mb-10">
                    <p className="text-xl font-semibold">Hernán Casalderrey</p>
                    <p>Calle 123</p>
                    <p>Córdoba</p>
                    <p>Argentina</p>
                    <p>CP: 123456</p>
                    <p>Teléfono: 123456789</p>
                    <p>Correo electrónico: hernan@hernan.com.ar</p>

                </div>

                <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />


                <h2 className="text-2xl mb-2 font-bold">Orden #{id}</h2>
                <div className="grid grid-cols-2">
                    <span>No. de productos</span>
                    <span className="text-right">3 artículos</span>

                    <span>Subtotal</span>
                    <span className="text-right">$ 100</span>   

                    <span>Impuestos (21%)</span>
                    <span className="text-right">$ 21</span>

                    <span className="mt-5 text-2xl font-semibold">Total:</span>
                    <span className="mt-5 text-2xl font-semibold text-right">$ 121</span>
                </div>

                <div className="mt-5 w-full mb-2">
                    
                <div className={
                clsx(
                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                    {
                        "bg-red-500": false,
                        "bg-green-700": true,
                    }
                )
            }>
                <IoCardOutline size={30} />
                {/*<span className="mx-2">Pendiente de pago</span>*/}
                <span className="mx-2">Pago confirmado</span>

            </div>
 
                </div>
          </div>
        
        
        </div>
      </div>
    </div>
  );
}
