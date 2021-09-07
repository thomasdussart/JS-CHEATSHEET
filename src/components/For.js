import React from "react";

const ForLoop = () => {
  return (
    <div>
      <h3>
        L'instruction for crée une boucle composée de trois expressions
        optionnelles séparées par des points-virgules et encadrées entre des
        parenthèses qui sont suivies par une instruction à exécuter dans la
        boucle.
      </h3>
      <pre>
        <code>
          {`
let SiriusTeam = ["Jeremy","Christophe","Julie","Thomas","Laetitia","Laura"];

for(let i = 0; i < SiriusTeam.length; i++) {
    console.log(SiriusTeam[i]);
}
`}
        </code>
      </pre>
    </div>
  );
};

export default ForLoop;
