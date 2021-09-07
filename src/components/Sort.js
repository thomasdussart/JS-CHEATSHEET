import React from "react";

const Sort = () => {
  return (
    <div>
      <h3>
        La méthode sort() trie les éléments d'un tableau, dans ce même tableau,
        et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du
        tableau convertis en chaînes de caractères et triées selon les valeurs
        des unités de code UTF-16 des caractères.
      </h3>
      <pre>
        <code>
          {`
let sortArray = [1, 10, 3];

console.log(sortArray.sort());

//output : [1,10,3]
`}
        </code>
      </pre>
      <h3>
        Si on veut trier un tableau de nombre, il convient d’utiliser la méthode
        suivante
      </h3>
      <pre>
        <code>
          {`
let sortArray = [1, 10, 3];

console.log(sortArray.sort((a, b) => a - b));

//output : [1,3,10]

`}
        </code>
      </pre>
    </div>
  );
};

export default Sort;
