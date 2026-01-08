export default function Journey() {
  return (
    <section id="journey" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-1">3 Simple Steps to Better Vision</h2>
        </div>

        <div className="row g-4 mt-4">
          {[1, 2, 3].map((n) => (
            <div className="col-lg-4" key={n}>
              <div className={`step-card h-100 ${n === 2 ? "border-primary border-2" : ""}`}>
                <div className="step-number">{n}</div>
                <h4 className="fw-bold mt-3">
                  {n === 1 && "Digital Mapping"}
                  {n === 2 && "Surgical Precision"}
                  {n === 3 && "Rapid Recovery"}
                </h4>
                <p className="text-muted small">
                  {n === 1 && "3D scans map your eye's unique topography."}
                  {n === 2 && "Robotic-assisted laser technology for accuracy."}
                  {n === 3 && "Clear vision within 24 hours for most patients."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
