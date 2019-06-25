import React from "react";

function Mycomponent() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: `100vw` }}>
      <h1 className="titre">My title</h1>

      <br />

      <img src="/imageInSrc.jpg" />

      <br />

      <img src="/imageInPublic.jpg" />
    </div>
  );
}
export default Mycomponent;