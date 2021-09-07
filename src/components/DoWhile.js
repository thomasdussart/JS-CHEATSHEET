import React from "react";

const DoWhile = () => {
  return (
    <div>
      <h3>
        L'instruction do...while crée une boucle qui exécute une instruction
        jusqu'à ce qu'une condition de test ne soit plus vérifiée. La condition
        est testée après que l'instruction soit exécutée, le bloc d'instructions
        défini dans la boucle est donc exécuté au moins une fois.
      </h3>

      <code>
        {`
let SiriusTeam = ["Jeremy","Christophe","Julie","Thomas","Laetitia","Laura"];
let i = 0

do {
console.log(SiriusTeam[1]);
i++;
} while(i < SiriusTeam.length)
`}
      </code>
    </div>
  );
};

export default DoWhile;
