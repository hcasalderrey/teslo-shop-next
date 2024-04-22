import { initialData } from "./seed"; 
import prisma from '../lib/prisma'; 

 
async function main() {

    const { categories, products} = initialData;
    //1. Borrar registros previos en la base de datos

    await Promise.all( [
        await prisma.productImage.deleteMany(),
        await prisma.product.deleteMany(),    
        await prisma.category.deleteMany(),
    ] )


    //2. Insertar datos en la base de datos 
    const categoriesData = categories.map( category => {
        return { name: category }
    })

    await prisma.category.createMany({ data: categoriesData })

    const categoriesDB = await prisma.category.findMany();
 

    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string, string>);


    products.forEach(async (product) =>{
        const {type, images, ...rest} = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type],                 
            }
        })

        const imagesData = images.map(image => {
            return {
                productId: dbProduct.id,
                url: image
            }
        })
        await prisma.productImage.createMany({ data: imagesData })
    })
     
  

     
    console.log('Seed ejecutado correctamente');
}


(()=>{
    //if(process.env.NODE_ENV === 'production') return
    main();
})();