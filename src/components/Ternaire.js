import React from "react";

const Ternaire = () => {
  return (
    <div>
      <h3>
        L'opérateur (ternaire) conditionnel est le seul opérateur JavaScript qui
        comporte trois opérandes. Cet opérateur est fréquemment utilisé comme
        raccourci pour la déclaration if/else.
      </h3>

      <code>
        {`
let IsNumber = true;

IsNumber ? console.log("vrai"):console.log("faux");
`}
      </code>
    </div>
  );
};

export default Ternaire;
