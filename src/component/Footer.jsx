import React from "react";
import FilterLink from "../container/FilterLink";

const Footer = () => {
  return (
    <p>
      Show: <FilterLink filter="SHOW_ALL">ALL</FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLIED">Complied</FilterLink>
    </p>
  );
};

export default Footer;
