import React from "react";

const Includes = () => {
  return (
    <div>
      <h3>
        La méthode includes() permet de déterminer si un tableau contient une
        valeur et renvoie true si c'est le cas, false sinon.
      </h3>
      <pre>
        <code>
          {`
let siriusTeamArray = ["jeremy", "thomas", "christophe", "laetitia", "julie", "laura"];

console.log(siriusTeamArray.includes('laetitia'));

//output: true
`}
        </code>
      </pre>
    </div>
  );
};

export default Includes;
