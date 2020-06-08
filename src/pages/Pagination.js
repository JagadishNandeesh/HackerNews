import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Pagination = ({ id }) => (
  <div className="paginator">
    <span className={"prev"}>
      <Link to={`/${parseInt(id, 10) - 1}`}>Prev</Link>
    </span>

    <span className={"next"}>
      <Link to={`/${parseInt(id, 10) + 1}`}>Next</Link>
    </span>
  </div>
);
