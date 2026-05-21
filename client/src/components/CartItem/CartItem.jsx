import firstImg from "../../assets/firstImg.png"
import mushrom from "../../assets/mushrom.png"
function CartItem() {
    return (
        <section>
            
            <div className="firstItem">
                <div className="img">
                    <img src={firstImg}alt="Pan-Seared Atlantic Salmon" />
                </div>
                <div className="content">
                    <h3>Pan-Seared Atlantic Salmon</h3>
                    <p>With organic quinoa & citrus dressing</p>
                    <span>$24.00</span>
                    <div className="icon">
                        <i class="fa-light fa-trash-can"></i>
                    </div>
                </div>

                <div className="quantity">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>
            <div className="sectItem">
                <div className="img">
                    <img src={mushrom}alt="Truffle Wild Mushroom Fettuccine" />
                </div>
                <div className="content">
                    <h3>Truffle Wild Mushroom Fettuccine</h3>
                    <p>Handmade pasta with 24-month aged parmesan</p>
                    <span>$19.50</span>
                    <div className="icon">
                        <i class="fa-light fa-trash-can"></i>
                    </div>
                </div>

                <div className="quantity">
                    <button>-</button>
                    <span>2</span>
                    <button>+</button>
                </div>
            </div>
        </section>
    )
}

export default CartItem;