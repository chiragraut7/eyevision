export default function Testimonials() {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="row g-4">

          {[
            ["LASIK Patient", "20/20 vision next day!", "James Henderson"],
            ["Cataract Patient", "Colors are so bright now.", "Eleanor Riggs"],
          ].map(([role, text, name], i) => (
            <div className="col-lg-6" key={i}>
              <div className="testimonial-card h-100">
                <div className="text-warning mb-2 small">
                  {Array(5).fill(0).map((_, j) => (
                    <i key={j} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="fst-italic">"{text}"</p>
                <h6 className="fw-bold mb-0 mt-3">{name}</h6>
                <small className="text-muted">{role}</small>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
