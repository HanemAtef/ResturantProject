import firstImg from "../../assets/firstImg.png"
import mushrom from "../../assets/mushrom.png"
import style from "./CartItem.module.css"

function CartItem() {
    return (
        <section>

            <div className={`${style.firstItem} d-flex justify-content-between m-5 `}>
                <div className="img">
                    <img src={firstImg} alt="Pan-Seared Atlantic Salmon" />
                </div>
                <div className={`${style.content}`}>
                    <h3>Pan-Seared Atlantic Salmon</h3>
                    <p>With organic quinoa & citrus dressing</p>
                    <span className={`${style.Price}`}>$24.00</span>
                    <div className={`${style.icon}`} onClick={() => onRemove(id)} >
                        <i className="fa-light fa-trash-can"></i>
                    </div>
                </div>

                <div className={`${style.quantity}`}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>
            
            <div className={`${style.sectItem} d-flex justify-content-between m-5`}>
                <div className="img">
                    <img src={mushrom} alt="Truffle Wild Mushroom Fettuccine" />
                </div>
                <div className={`${style.content}`}>
                    <h3>Truffle Wild Mushroom Fettuccine</h3>
                    <p>Handmade pasta with 24-month aged parmesan</p>
                    <span className={`${style.Price}`}>$19.50</span>
                    <div className={`${style.icon}`}>
                        <i className="fa-light fa-trash-can"></i>
                    </div>
                </div>

                <div className={`${style.quantity}`}>
                    <button onClick={() => quantity > 1? onQuantityChange(id, quantity - 1): onRemove(id) }>-</button>
                    <span>2</span>
                    <button onClick={() => onQuantityChange(id, quantity + 1)}>+</button>
                </div>
            </div>
        </section>
    )
}

export default CartItem;