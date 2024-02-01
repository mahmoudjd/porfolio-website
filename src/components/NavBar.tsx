import React from "react";

function NavBar() {
  return (
    <nav
      className="d-flex align-items-center p-3 my-3 text-black bg-blue rounded shadow-sm"
      style={{ top: "0" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="myfoto.jpeg"
            alt="mahmoud"
            className=" me-3"
            width="38"
            height="38"
            style={{ borderRadius: "50%" }}
          />
          <div className="lh-1">
            <h1 className="h6 mb-0 lh-1 text black">Mahmoud Al Jarad</h1>

            <small>mahmoudjd</small>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
