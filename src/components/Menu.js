import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h2 className="text-3xl">Bases</h2>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/consolelog"}>
          Console.log
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/getelemid"}>
          getElementById
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/getelemclass"}>
          getElementByClassName
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/getelemtag"}>
          getElementByTagName
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/getelemname"}>
          getElementByName
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/fonctions"}>
          Fonctions
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/ifelse"}>
          If / Else
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/ternaire"}>
          Ternaire
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/switch"}>
          Switch
        </Link>
      </p>
      <h2 className="text-3xl">Boucles</h2>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/forloop"}>
          For
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/do-while"}>
          Do-While
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/while"}>
          While
        </Link>
      </p>
      <h2 className="text-3xl">Arrays</h2>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/pop"}>
          Pop
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/shift"}>
          Shift
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/push"}>
          Push
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/index-array"}>
          Index
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/filter"}>
          Filter
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/map"}>
          Reduce
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/map"}>
          Map / ForEach
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/includes"}>
          Includes
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/sort"}>
          Sort
        </Link>
      </p>
      <h2 className="text-3xl">Asynchrone</h2>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/set-timeout"}>
          Set Timeout
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/fetch"}>
          Fetch GET
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/fetch-post"}>
          Fetch POST
        </Link>
      </p>
      <p className="w-48">
        <Link className="no-underline text-gray-500" to={"/fetch-delete"}>
          Fetch DELETE
        </Link>
      </p>
    </div>
  );
};

export default Menu;
