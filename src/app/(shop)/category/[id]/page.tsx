import { notFound } from "next/navigation";

import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";

const products = initialData.products



interface Props {
    params: {
        id: Category
    }
}

export default function({params}: Props) {

    const {id} = params
    const productsByCategory = products.filter(product => product.gender === id)


    const labels: Record<Category, string> = {
        //'': 'Todos',
        'women': 'para mujeres',
        'men': 'para hombres',
        'kid': 'para niños',
        'unisex': 'para todos'
    }
    //if(id==='kids') {
    //    notFound()
    //}


  return (
    <div>

    <Title title={`Artículos de ${labels[id]}`} subtitle="Todos los productos" className="mb-2" /> 
      <ProductGrid products={productsByCategory} />


      
    </div>
  );
}