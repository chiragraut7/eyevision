export default function Hero() {
  return (
    <header className="hero-premium">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <div className="tech-pill mb-3 d-inline-block">
              2026 TOP-RATED SURGERY CENTER
            </div>

            <h1 className="display-3 fw-bold mb-4">
              Precision Vision. <br />
              <span className="text-info">No Compromises.</span>
            </h1>

            <p className="lead opacity-75 mb-5">
              Advanced ophthalmic diagnostics with robotic precision.
            </p>

            <div className="row g-4 mb-5 text-center text-lg-start">
              <div className="col-6">
                <h3 className="fw-bold text-info mb-0">99.8%</h3>
                <small className="opacity-50">Success Rate</small>
              </div>
              <div className="col-6">
                <h3 className="fw-bold text-info mb-0">15k+</h3>
                <small className="opacity-50">Patients Served</small>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-info btn-lg">
                Book Consultation
              </a>
              <a href="#tech" className="btn btn-outline-light btn-lg rounded-pill">
                View Technology
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="vision-container">
              <div className="vision-blurry"></div>
              <div className="vision-clear"></div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
