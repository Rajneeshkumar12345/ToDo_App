import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/Home" style={{ padding: "10px" }}>
          Todo App
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
