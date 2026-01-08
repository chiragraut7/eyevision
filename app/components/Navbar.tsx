export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          <i className="fas fa-eye-low-vision text-primary me-2"></i>
          VISION<span className="text-primary">ELITE</span>
        </a>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto gap-3 align-items-center">
            <li><a className="nav-link" href="#tech">Technology</a></li>
            <li><a className="nav-link" href="#journey">Process</a></li>
            <li><a className="nav-link" href="#prep">Preparation</a></li>
            <li>
              <a href="#contact" className="btn btn-primary shadow-sm">
                Book Securely
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
