// class =  (ES6 feature) provides a more structured and cleaner way to
//          work with objects compared to traditional constructor functions
//          ex. static keyword, encapsulation

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTaxes){
        return this.price + (this.price * salesTaxes);
    }
}

const salesTaxes = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 19.99);

product3.displayProduct();

const total = product3.calculateTotal(salesTaxes)

console.log(`Total price (with tax): $${total.toFixed(2)}`);