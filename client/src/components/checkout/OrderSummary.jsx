import OrderItem from "./OrderItem";

export default function OrderSummary() {
  return (
    <div className={`card p-4 `}>
      <h5>Order Summary</h5>

      <div className="mt-3">
        <OrderItem title="Truffle Garden Salad" price={24} />
        <OrderItem title="Artisanal Margherita" price={32} />
        <OrderItem title="Citrus Infusion" price={9} />
      </div>

      <hr />

      <div className="d-flex justify-content-between">
        <span>Subtotal</span>
        <span>$65.00</span>
      </div>

      <div className="d-flex justify-content-between">
        <span>Delivery Fee</span>
        <span>$5.00</span>
      </div>

      <div className="d-flex justify-content-between">
        <span>Service Tax</span>
        <span>$4.55</span>
      </div>

      <hr />

      <div className="d-flex justify-content-between fw-bold">
        <span>Total</span>
        <span className="text-danger">$74.55</span>
      </div>

      <button className="btn btn-danger w-100 mt-3">
        Place Order →
      </button>
    </div>
  );
}