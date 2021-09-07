import React from "react";

const Reduce = () => {
  return (
    <div>
      <h3>
        La méthode reduce() applique une fonction qui est un « accumulateur » et
        qui traite chaque valeur d'une liste (de la gauche vers la droite) afin
        de la réduire à une seule valeur.
      </h3>

      <code>
        {`
let array = [1, 2, 3, 4 ,5];

const reducer = (accumulateur, valActuelle) => accumulateur+valActuelle; 

console.log(array.reduce(reducer));

// output : 15

`}
      </code>
    </div>
  );
};

export default Reduce;
