
export default function DeliveryAddress() {
  return (
    <div className={`card p-4 `}>
      <h5>Delivery Address</h5>

      <div className="mt-3">
        <label className="form-label">Street Address</label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Apartment, suite, unit, building..."
        />
      </div>

      <div className="row g-3 mt-2">
        <div className="col-md-6">
          <label className="form-label">City</label>
          <input className="form-control" placeholder="New York" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Postal Code</label>
          <input className="form-control" placeholder="10001" />
        </div>
      </div>
    </div>
  );
}