import React from "react";

const GetElemName = () => {
  return (
    <div>
      <h3>Tous les élements HTML ayant l'attribut "name"</h3>
      <pre>
        <code>
          {`
<input type="text" name="texte">

let texte = document.getElementByName("texte");
`}
        </code>
      </pre>
    </div>
  );
};

export default GetElemName;
