import CartItem from "../components/CartItem/CartItem";

function CartPage() {
    return (
        <div className="container">
            <div className="header py-5">
                <h1>Your Gourmet Selection</h1>
                <p>Review your curated menu items before checkout.</p>
            </div>

            <CartItem/>
        </div>
    )
}

export default CartPage;