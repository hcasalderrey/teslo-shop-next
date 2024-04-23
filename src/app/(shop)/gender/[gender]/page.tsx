export const revalidate = 60;


import { redirect } from "next/navigation";
 
import { ProductGrid, Title } from "@/components";
import { Pagination } from '../../../../components/ui/pagination/Pagination';
import { getPaginatedProductsWithImages } from "@/actions";
import { Gender } from "@prisma/client";
  



interface Props {
    params: {
        gender: string
    },
    searchParams: {
        page?: string
    }
}

export default async function GenderPage({params, searchParams}: Props) {

    const {gender} = params 


    const page  = searchParams.page ? parseInt( searchParams.page ) : 1;

    const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page , gender: gender as Gender});
  
     if(products.length === 0) {
      redirect(`/gender/${gender}`)
     }




    const labels: Record<string, string> = {
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

    <Title title={`Artículos de ${labels[gender]}`} subtitle="Todos los productos" className="mb-2" /> 
      <ProductGrid products={products} />
    <Pagination totalPages={totalPages}  />

      
    </div>
  );
}