export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ background: "var(--eye-navy)" }}>
      <div className="container py-5">
        <div className="glass-card overflow-hidden shadow-lg p-0">
          <div className="row g-0">

            <div className="col-lg-5 bg-primary p-5 text-white">
              <h2 className="fw-bold mb-4">Priority Booking</h2>
              <p className="mb-4 opacity-75">
                Our coordinator will contact you within 2 hours.
              </p>
              <h4 className="fw-bold text-info">+91 9XXXX XXXXX</h4>
            </div>

            <div className="col-lg-7 p-5">
              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <input className="form-control bg-light py-3 px-4 rounded-pill" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input className="form-control bg-light py-3 px-4 rounded-pill" placeholder="Mobile Number" />
                  </div>
                  <div className="col-12">
                    <select className="form-select bg-light py-3 px-4 rounded-pill">
                      <option>Cataract</option>
                      <option>LASIK</option>
                      <option>General Eye Exam</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3 rounded-pill fw-bold">
                      Request Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
