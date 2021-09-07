import React from "react";

const Fonctions = () => {
  return (
    <div>
      <h3>
        Une fonction est un ensemble d'instructions menant à la réalisation
        d'une tâche.
      </h3>

      <code>
        {`
function calculate(a,b){
   return a * b;
}

const calculate = (a,b) => {
    return a * b;
}
`}
      </code>
    </div>
  );
};

export default Fonctions;
