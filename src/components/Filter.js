import React from "react";

const Filter = () => {
  return (
    <div>
      <h3>
        La méthode filter() crée et retourne un nouveau tableau contenant tous
        les éléments du tableau d'origine qui remplissent une condition
        déterminée par la fonction callback.
      </h3>
      <pre>
        <code>
          {`
let siriusTeamArray = ["jeremy", "christophe", "thomas", "laetitia", "julie", "laura"];
let newarray = siriusTeamArray.filter(el => el === "laetitia");
console.log(newarray);
`}
        </code>
      </pre>
    </div>
  );
};

export default Filter;
