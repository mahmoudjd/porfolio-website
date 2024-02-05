import { useState } from "react";

function NavBar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="./foto.jpeg"
            alt="picture of person"
            className="me-2 rounded-circle"
            width="35"
            height="35"
          />
          <div>
            <h1 className="h6 mb-0 lh-1">M-Jd</h1>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
          <ul className="navbar-nav ml-auto">
            {["About", "Projects", "Contact"].map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
