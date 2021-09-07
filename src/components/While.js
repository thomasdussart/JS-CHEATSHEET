import React from "react";

const WhileLoop = () => {
  return (
    <div>
      <h3>
        L'instruction while permet de créer une boucle qui s'exécute tant qu'une
        condition de test est vérifiée. La condition est évaluée avant
        d'exécuter l'instruction contenue dans la boucle.
      </h3>
      <pre>
        <code>
          {`
let SiriusTeam = ["Jeremy","Christophe","Julie","Thomas","Laetitia","Laura"];
let i = 0

while (i < SiriusTeam.length)
console.log(SiriusTeam[1]);
i++;
}
`}
        </code>
      </pre>
    </div>
  );
};

export default WhileLoop;
