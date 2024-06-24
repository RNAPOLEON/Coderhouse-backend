class ProductManager {
    constructor() {
        this.products = [];
        this.counter = 0;
        this.idMap = new Map();
    }
    generateId() {
        this.counter++;

        // Genera el identificador único
        const newId = this.counter;

        // Verifica si el identificador ya existe, y si es así, vuelve a intentar
        while (this.idMap.has(newId)) {
            this.counter++;
            newId = this.counter;
        }

        // Almacena el nuevo identificador en el mapa
        this.idMap.set(newId, true);

        return newId;
    }
    getProducts() {
        return this.products;
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        const isCodeDuplicate = this.products.some((product) => product.code === code);

        if (isCodeDuplicate) {
            throw new Error('El código del producto ya está en uso.');
        }

        const newProduct = {
            id: this.generateId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);
        return newProduct;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);

        if (!product) {
            throw new Error('Producto no encontrado.');
        }

        return product;
    }
}





const productManager = new ProductManager();
console.log("");
console.log("");
console.log("El valor inicial de procuto");
console.log('Producto inicial:', productManager.getProducts());
console.log("");
console.log("");


const newProduct = productManager.addProduct(
    'producto prueba',
    'Este es un producto prueba',
    200,
    'Sin imagen',
    'abc123',
    25
);
const newProduct2 = productManager.addProduct(
    'producto prueba 2',
    'Este es un producto prueba2 ',
    200,
    'Sin imagen',
    'DOS',
    25
);
console.log("");
console.log("");

console.log("________________________________________________________________________________________________");
console.log("");
console.log('newProduct1: ', newProduct);
console.log('newProduct2: ', newProduct2);
console.log("");
console.log("________________________________________________________________________________________________");
console.log("");
console.log('Llamar a la lista con getProducts:', productManager.getProducts());
console.log("");
console.log("________________________________________________________________________________________________");

console.log("");
console.log("");

try {
    console.log("________________________________________________________________________________________________");
    console.log("");
    console.error('Agregar otro product con codigo duplicado, ');
    console.log("");
    console.log("________________________________________________________________________________________________");
    productManager.addProduct('Otro producto', 'Descripción', 150, 'Imagen', 'abc123', 30);
} catch (error) {

    
    console.log("________________________________________________________________________________________________");
    console.log("");
    console.error('Error al agregar producto duplicado:', error.message);
    console.log("");
    console.log("________________________________________________________________________________________________");


}
console.log("");
console.log("");

try {

    console.log("Prue1 : Buscar por id existente");
    const prue1 = productManager.getProductById(1);
    
    console.log("________________________________________________________________________________________________");
    console.log("");
    console.log('Producto encontrado por ID:', prue1);
    console.log("");
    console.log("________________________________________________________________________________________________");
    console.log("________________________________________________________________________________________________");
    console.log("");
    console.log('Producto encontrado por ID:', prue2);
    console.log("");
    console.log("________________________________________________________________________________________________");

} catch (error) {


    console.log("________________________________________________________________________________________________");
    console.log("");
    console.error('Error al obtener producto por ID:', error.message);
    console.log("");
    console.log("________________________________________________________________________________________________");

    
}

console.log("");
console.log("");

try {
    
    console.log("Prue2: buscar id no existente");
    const prue2 = productManager.getProductById(1001934);
    
    console.log("________________________________________________________________________________________________");
    console.log("");
    console.log('Producto encontrado por ID:', prue1);
    console.log("");
    console.log("________________________________________________________________________________________________");
    console.log("________________________________________________________________________________________________");
    console.log("");
    console.log('Producto encontrado por ID:', prue2);
    console.log("");
    console.log("________________________________________________________________________________________________");

} catch (error) {


    console.log("________________________________________________________________________________________________");
    console.log("");
    console.error('Error al obtener producto por ID:', error.message);
    console.log("");
    console.log("________________________________________________________________________________________________");

    
}
    
try {
    
    console.log("Prue2: buscar id no existente");
    const prue2 = productManager.getProductById(1001934);
    
    console.log("________________________________________________________________________________________________");
    console.log("");
    console.log('Producto encontrado por ID:', prue1);
    console.log("");
    console.log("________________________________________________________________________________________________");
    console.log("________________________________________________________________________________________________");
    console.log("");
    console.log('Producto encontrado por ID:', prue2);
    console.log("");
    console.log("________________________________________________________________________________________________");

} catch (error) {


    console.log("________________________________________________________________________________________________");
    console.log("");
    console.error('Error al obtener producto por ID:', error.message);
    console.log("");
    console.log("________________________________________________________________________________________________");

    
}