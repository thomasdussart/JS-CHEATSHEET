import React from "react";

const SetTimeout = () => {
  return (
    <div>
      <h3>Permet d'exécuter une fonction callback après un temps donné.</h3>

      <code>
        {`
window.setTimeOut(() => {
    console.log("Hello World");
}, 2000)
`}
      </code>
    </div>
  );
};

export default SetTimeout;
