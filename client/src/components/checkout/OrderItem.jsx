export default function OrderItem({ title, price }) {
  return (
    <div className="d-flex justify-content-between mb-2">
      <span>{title}</span>
      <span>${price.toFixed(2)}</span>
    </div>
  );
}