
import style from "./OrderSummary.module.css"

function OrderSummary(){
    return(
        <div className={`${style.container} `}>

        <div className="orderHeadre">
            <h3>Order Summary</h3>
        </div>
        <div className="content">
            <p>Subtotal</p>
            <p>Shipping</p>
            <p>Service Fee</p>
        </div>

        <div className="total">
            <p>Total</p>
        </div>
        <button>Proceed to Checkout</button>
        <div className="validate">
            <div className="icon">
                <i className="fa-solid fa-circle-check"></i>
            </div>
            <p>Secure checkout powered by Warm Gourmet Pay</p>
        </div>
        </div>
    )
}
export default OrderSummary;