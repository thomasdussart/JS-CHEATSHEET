import React from "react";

const Consolelog = () => {
  return (
    <div>
      <h3>Permet d'afficher un élément dans la console</h3>
      <pre>
        <code>{`
console.log("Hello World")
`}</code>
      </pre>
    </div>
  );
};

export default Consolelog;
