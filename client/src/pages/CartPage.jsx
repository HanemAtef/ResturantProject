import style from "./CartPage.module.css"
import CartItem from "../components/CartItem/CartItem";
import OrderSummary from "../components/OrderSummary/OrderSummary";

function CartPage() {
    return (
        <div className={`${style.container} w-100`}>
            <div className={`${style.header} py-5`}>
                <h1>Your Gourmet Selection</h1>
                <p>Review your curated menu items before checkout.</p>
            </div>

            <div className="parent d-flex ">
                <CartItem />
                <OrderSummary />
            </div>
        </div>
    )
}

export default CartPage;