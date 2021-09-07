import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h2>Bases</h2>
      <p>
        <Link to={"/consolelog"}>Console.log</Link>
      </p>
      <p>
        <Link to={"/fonctions"}>Fonctions</Link>
      </p>
      <p>
        <Link to={"/ifelse"}>If / Else</Link>
      </p>
      <p>
        <Link to={"/ternaire"}>Ternaire</Link>
      </p>
      <p>
        <Link to={"/switch"}>Switch</Link>
      </p>
      <h2>Boucles</h2>
      <p>
        <Link to={"/forloop"}>For</Link>
      </p>
      <p>
        <Link to={"/do-while"}>Do-While</Link>
      </p>
      <p>
        <Link to={"/while"}>While</Link>
      </p>
      <h2>Arrays</h2>
      <p>
        <Link to={"/pop"}>Pop</Link>
      </p>
      <p>
        <Link to={"/shift"}>Shift</Link>
      </p>
      <p>
        <Link to={"/push"}>Push</Link>
      </p>
      <p>
        <Link to={"/index-array"}>Index</Link>
      </p>
      <p>
        <Link to={"/filter"}>Filter</Link>
      </p>
      <p>
        <Link to={"/map"}>Reduce</Link>
      </p>
      <p>
        <Link to={"/map"}>Map / ForEach</Link>
      </p>
      <p>
        <Link to={"/includes"}>Includes</Link>
      </p>
      <p>
        <Link to={"/sort"}>Sort</Link>
      </p>
      <h2>Asynchrone</h2>
      <p>
        <Link to={"/set-timeout"}>Set Timeout</Link>
      </p>
      <p>
        <Link to={"/sort"}>Sort</Link>
      </p>
    </div>
  );
};

export default Menu;
