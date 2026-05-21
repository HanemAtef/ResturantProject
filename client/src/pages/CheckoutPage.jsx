import ContactInfo from "../components/checkout/ContactInfo";
import DeliveryAddress from "../components/checkout/DeliveryAddress";
import OrderSummary from "../components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className={`container py-5 `}>
      <h2 className="mb-1">Checkout</h2>
      <p className="text-muted mb-4">
        Review your details and confirm your order.
      </p>

      <div className="row g-4">
        <div className="col-lg-8">
          <ContactInfo />
          <DeliveryAddress />
        </div>

        <div className="col-lg-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}