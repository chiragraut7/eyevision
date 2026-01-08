export default function Prep() {
  return (
    <section className="section-padding bg-white" id="prep">
      <div className="container">
        <div className="row g-5 align-items-center">

          <div className="col-lg-5">
            <h2 className="fw-bold mb-4">
              Your First Visit <br />
              <span className="text-primary">Preparation Guide</span>
            </h2>
            <p className="text-muted">
              Prepare these items for your consultation.
            </p>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">

              {[
                ["fa-glasses", "Current Eyewear", "Bring all glasses and contact boxes."],
                ["fa-pills", "Medication List", "List of current medications."],
                ["fa-id-card", "Insurance Cards", "Bring insurance cards."],
                ["fa-car", "Designated Driver", "Eyes may be dilated."],
              ].map(([icon, title, desc], i) => (
                <div className="col-md-6 d-flex" key={i}>
                  <i className={`fas ${icon} text-primary fs-4 me-3`}></i>
                  <div>
                    <h6 className="fw-bold mb-1">{title}</h6>
                    <p className="small text-muted mb-0">{desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
