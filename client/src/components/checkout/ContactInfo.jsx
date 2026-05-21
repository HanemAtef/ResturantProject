
export default function ContactInfo() {
  return (
    <div className={`card p-4 mb-4 `}>
      <h5>Contact Information</h5>

      <div className="row g-3 mt-2">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input className="form-control" placeholder="Julianne Smith" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input className="form-control" placeholder="+1 (555) 000-0000" />
        </div>

        <div className="col-12">
          <label className="form-label">Email Address</label>
          <input className="form-control" placeholder="email@example.com" />
        </div>
      </div>
    </div>
  );
}