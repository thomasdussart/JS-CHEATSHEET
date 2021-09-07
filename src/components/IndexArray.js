import React from "react";

const IndexArray = () => {
  return (
    <div>
      <h3>
        La méthode findIndex() renvoie l'indice du premier élément du tableau
        qui satisfait une condition donnée par une fonction. Si la fonction
        renvoie faux pour tous les éléments du tableau, le résultat vaut -1.
      </h3>

      <code>
        {`
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
`}
      </code>

      <h3>
        La méthode indexOf() renvoie le premier indice pour lequel on trouve un
        élément donné dans un tableau. Si l'élément cherché n'est pas présent
        dans le tableau, la méthode renverra -1.
      </h3>

      <code>
        {`
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
`}
      </code>
    </div>
  );
};

export default IndexArray;
