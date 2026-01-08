export default function Tech() {
  return (
    <section className="section-padding" id="tech">
      <div className="container">
        <div className="row mb-5 text-center">
          <div className="col-lg-8 mx-auto">
            <h2 className="fw-bold">
              Our Diagnostic <span className="text-primary">Elite Suite</span>
            </h2>
            <p className="text-muted">
              We invest in the world’s most precise machinery because your eyes deserve zero margin for error.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="glass-card">
              <i className="fas fa-microscope text-primary mb-3 fs-2"></i>
              <h5 className="fw-bold">Zeiss Callisto Eye</h5>
              <p className="small text-muted">
                Robotic assistance system ensuring alignment within 1 degree accuracy.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="glass-card border-primary">
              <i className="fas fa-bolt text-primary mb-3 fs-2"></i>
              <h5 className="fw-bold">WaveLight® EX500</h5>
              <p className="small text-muted">
                Fastest excimer laser for LASIK with minimal dry-eye.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="glass-card">
              <i className="fas fa-cube text-primary mb-3 fs-2"></i>
              <h5 className="fw-bold">3D Optical Coherence</h5>
              <p className="small text-muted">
                High-definition retinal imaging beneath the surface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
