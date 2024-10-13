const ShoppingCart = (props) => {

    const cart = props.cart

    return <p>{cart}</p>

}


const SecondaryInfo = (props) => {

    const updateCart = () => {
        props.addToCart();
    }

    return (
        <button onClick={updateCart}>Update Cart ({props.cart})</button>
    );

}


const App = () => {

    const [cart, setCart] = React.useState(0);

    const cartContents = () => {
        return console.log(cart);
    }

    const addToCart = () => {
        setCart(cart + 1)
    }


    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Support</li>
                    <li>Cart: <ShoppingCart cart={cart} /></li>
                </ul>
            </nav>
        </header>
        <main>
            <h2>Welcome to our store</h2>

            <p>lorem ipsum dolor set</p>

            <h3>Your cart: <ShoppingCart cart={cart} /></h3>

            <SecondaryInfo addToCart={addToCart} cart={cart} />
        </main>
        <footer>
            <span>&copy; 2024, My shop.</span>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Support</li>
                <li>Cart: <ShoppingCart cart={cart} /></li>
            </ul> 
        </footer>
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);