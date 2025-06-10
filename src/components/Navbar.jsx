// components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">Naveen Malik</a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  