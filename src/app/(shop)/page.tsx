import { redirect } from "next/navigation";
import { Pagination, ProductGrid, Title } from "@/components";  
import { getPaginatedProductsWithImages } from "../actions";

interface Props {
    searchParams: {
      page?: string; 
    }
  }
  

export default async function Home({ searchParams }: Props) {
    const page  = searchParams.page ? parseInt( searchParams.page ) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });

   if(products.length === 0) {
    redirect('/')
   }

  return (
    <>
      <Title title="Mi-Catalogo" subtitle="Todos los productos" className="mb-2" /> 
      <ProductGrid 
        products={ products }
      />
      <Pagination totalPages = { totalPages } />
    </>
  );
}
