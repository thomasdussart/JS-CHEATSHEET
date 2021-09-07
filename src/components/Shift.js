import React from "react";

const Shift = () => {
  return (
    <div>
      <h3>
        La méthode shift permet de retirer le premier élément du tableau et de
        le renvoyer, de la même manière que se comporte la méthode pop.
      </h3>

      <code>
        {`
let siriusTeamArray = ["Jeremy", "Christophe", "Julie", "Thomas", "Laetitia", "Laura"];

console.log(siriusTeamArray.shift());

//Output: "Jeremy"
`}
      </code>
    </div>
  );
};

export default Shift;
