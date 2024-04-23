export const revalidate = 604800

import { getProductBySlug } from "@/actions";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector, StockLabel} from "@/components";
 
import { titleFont } from "@/config/fonts";
import { priceAR } from "@/interfaces";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string
    }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug
   
    // fetch data
    const product = await getProductBySlug(slug)
   
    // optionally access and extend (rather than replace) parent metadata
    //const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: product?.title ?? 'Producto no encontrado',
      description: product?.description ?? '',

      openGraph: {
        title: product?.title ?? 'Producto no encontrado',
        description: product?.description ?? '',
        images: [`/products/${product?.images[1]}`],
      },
    }
  }

export default async function ProductSlugPage({params}: Props) {

    const {slug} = params
    const product = await getProductBySlug(slug)
    if(!product){
        notFound()
    } 

    let price = priceAR(product.price);
 


 


  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">

        {/* Slideshow */}
        <div className="col-span-1 md:col-span-2 ">
            {/* Mobile Slideshow  */}
        <ProductMobileSlideshow images={product.images} title={product.title} className="block md:hidden" />
            {/* Desktop Slideshow  */}
        <ProductSlideshow  images={product.images} title={product.title}  className="hidden md:block " />

         
        </div>


        {/* Detalles del producto */}
        <div className="col-span-1 px-5 ">
            <StockLabel slug={product.slug}/>
            <h1 className={`antialiased text-xl font-bold  ${titleFont.className}`	}>{product.title}</h1>

            <p className="text-lg mb-5">{price}</p>

            {/* Selector de talles */}

            <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes}/>

            {/* Selector de cantidad */}

            <QuantitySelector quantity ={2}/>
            {/* Boton agregar al carrito */}
            <button className="btn-primary my-5 ">Agregar al Carrito</button>

            <h3 className="text-sm font-bold">Descripción</h3>

            <p className="font-light text-pretty">{product.description}</p>
        </div>

    </div>
  );
}