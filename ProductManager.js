class ProductManager {
    constructor() {
        this.products= []; 
    }


getProducts = () => {
    return this.products;

}

addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
        title,
        description,    
        price,      
        thumbnail, 
        code,   
        stock,  
        products: [],

    }

    if (this.products.length === 0) {
        product.id = 1
      } else {
        product.id = this.products [this.products.length - 1].id+1 
      }
      this.products.push(product)

}

getProductbyId = (idProduct) => {

    const productIndex = this.products.findIndex(product => product.id === idProduct);
     if (productIndex === -1) {
        console.log("Not Found");
        return;
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);
    if (productAdd) {
        console.log ("El producto fue agregado correctamente");
        return;
    }
    this.products[productIndex].products.push(idProduct)
}
};
const manejadorProductros = new ProductManager ();
manejadorProductros.addProduct ('Bersa', 'Compact', 80, 'sin imagen', 'BerCompact', 40 );
manejadorProductros.addProduct ('Bersa', 'XT', 180, 'sin imagen', 'BerXT', 40 );
manejadorProductros.addProduct ('Bersa', 'Thunder', 70, 'sin imagen', 'BerThunder', 40 );

manejadorProductros.getProductbyId(1);
manejadorProductros.getProductbyId(2);
manejadorProductros.getProductbyId(3);

console.log(manejadorProductros.getProducts());