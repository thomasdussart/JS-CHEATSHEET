import React from "react";

const Push = () => {
  return (
    <div>
      <h3>
        La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau
        et retourne la nouvelle taille du tableau.
      </h3>
      <pre>
        <code>
          {`
let siriusTeamArray = ["Jeremy", "Christophe", "Julie", "Thomas", "Laetitia", "Laura"];

console.log(siriusTeamArray.length);

// Output: 5

console.log(siriusTeamArray.push("Jeremy", "Thomas"));

//Output: 7
`}
        </code>
      </pre>
    </div>
  );
};

export default Push;
