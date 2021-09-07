import React from "react";

const IfElse = () => {
  return (
    <div>
      <h3>
        L'instruction if exécute une instruction si une condition donnée est
        vraie ou équivalente à vrai. Si la condition n'est pas vérifiée, il est
        possible d'utiliser une autre instruction.
      </h3>

      <code>
        {`
let number = true;

if(number) {
    console.log("Vrai");
} else {
    console.log("Faux");
}
`}
      </code>
    </div>
  );
};

export default IfElse;
