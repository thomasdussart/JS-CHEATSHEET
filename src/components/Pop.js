import React from "react";

const Pop = () => {
  return (
    <div>
      <h3>
        La méthode pop() permet de supprimer et retourner le dernier élément
        d'un tableau. Elle modifie donc la valeur de la propriété length
        (longueur) du tableau.
      </h3>
      <pre>
        <code>
          {`
let siriusTeamArray = ["Jeremy", "Christophe", "Julie", "Thomas", "Laetitia", "Laura"];

console.log(siriusTeamArray.pop());

//output: "Laura"
`}
        </code>
      </pre>
    </div>
  );
};

export default Pop;
