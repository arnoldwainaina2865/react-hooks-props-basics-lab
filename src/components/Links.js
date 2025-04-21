// src/components/Links.js
import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {github && <a href={github}>{github}</a>}
      {github && linkedin && <br />}
      {linkedin && <a href={linkedin}>{linkedin}</a>}
    </div>
  );
}

export default Links;