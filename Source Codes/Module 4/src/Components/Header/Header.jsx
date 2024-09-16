import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Header = ({ content }) => {
  return (
    <>
      <section className="container-xl p-3">
        <h1 className="text-center fw-bold text-primary">{content}</h1>
      </section>
    </>
  );
};

export default Header;
