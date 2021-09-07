import React from "react";

const MapArray = () => {
  return (
    <div>
      <h3>
        La méthode forEach() permet d'exécuter une fonction donnée sur chaque
        élément du tableau.
      </h3>
      <pre>
        <code>
          {`
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

`}
        </code>
      </pre>
      <h3>
        La méthode map() crée un nouveau tableau avec les résultats de l'appel
        d'une fonction fournie sur chaque élément du tableau.
      </h3>
      <pre>
        <code>
          {`
let numberArray = [1, 2, 3, 4];

let byTwoArray = numberArray.map(el => el * 2);

console.log(byTwoArray);

`}
        </code>
      </pre>
    </div>
  );
};

export default MapArray;
