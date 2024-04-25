
const format = 'es-AR'
const formatcurrency = 'ARS'

export const priceAR = (price: number) => {
    let options = { style: 'currency', currency: formatcurrency, minimumFractionDigits: 2, maximumFractionDigits: 2 };
    let formatter = new Intl.NumberFormat(format, options);
    
    return formatter.format(price);
}
 
