(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {

        private httpAdapter: Object;

        getProduct(id: number) {
            console.log(`El producto Cargado es [${id}, TV OLED]`);
        }

        saveProduct(product: Product) {
            console.log(`Se esta guardando el producto [${product.id} - ${product.name}]`)
        }
    }

    interface ClientProps {
        id: number;
        name: string;
        email: string;
    }

    class Notifier {
        notifyClient(client: ClientProps) {
            console.log(`Enviando mensaje al cliente ${client.id} - ${client.name}, cuyo correo es: ${client.email}`)
        }
    }

    class CartBloc {

        private items: Object[] = [];

        addToCart(productId: number) {
            console.log(`Agregando al Carrito el producto [${productId}]`);
        }
    }

    class ProductBloc {
        private productService: ProductService;
        private notifier: Notifier;
        private cart: CartBloc;

        constructor(productService: ProductService, notifier: Notifier, cart: CartBloc) {
            this.productService = productService;
            this.notifier = notifier;
            this.cart = cart;
        }

        loadProduct(id: number) {
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            this.productService.saveProduct(product);
        }

        notifyClients(client: ClientProps) {
            this.notifier.notifyClient(client);
        }

        onAddCart(id: number){
            this.cart.addToCart(id);
        }
    }



    const cartBloc = new CartBloc();
    const productServices = new ProductService();
    const notificador = new Notifier();
    const productBloc = new ProductBloc(productServices,notificador,cartBloc);

    productBloc.loadProduct(10);
    productBloc.saveProduct({id: 10, name: 'OLED TV'});
    productBloc.notifyClients({
        id: 5,
        name: 'Leonardo',
        email: 'lfmercadobe@unal.edu.co'
    });
    productBloc.onAddCart(10);


})();