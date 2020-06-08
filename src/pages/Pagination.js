import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Pagination = ({ id }) => (
  <div className="paginator">
    <span>
      <Link to={`/${parseInt(id, 10) - 1}`}>Prev</Link>
    </span>

    <span>
      <Link to={`/${parseInt(id, 10) + 1}`}>Next</Link>
    </span>
  </div>
);
