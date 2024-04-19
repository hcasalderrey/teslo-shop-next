import {Product} from '@/interfaces'
import { ProductGridItem } from './ProductGridItem'

interface Props {
    products: Product[]
}

export const ProductGrid = ({products}: Props) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 l gap-10 mb-10'>
        {
            products.map(product => (
                <ProductGridItem key={product.slug} product={product} />
                
            ))
        }
        
    </div>
  )
}
