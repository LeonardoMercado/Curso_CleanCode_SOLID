type Size = ''|'S'|'M'|'L'|'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady(): boolean{
        for(const key in this){
            switch (typeof this[key]) {
                case 'string':
                    if((<string><unknown>this[key]).length <= 0 ) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if((<number><unknown>this[key]) <= 0 ) throw Error(`${key} is 0`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not soported`);
            }
        }
        return true;
    }

    toString(){
        if(!this.isProductReady()) return;
        return `
        * PRODUCT:
            - NAME: ${this.name} 
            - PRICE: $ ${this.price},00
            - SIZE: ${this.size}
        `;

    }
}

(()=>{
    const bluePants = new Product('My pants',23,'L');
    console.log(bluePants.toString());
})();