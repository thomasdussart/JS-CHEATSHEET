import React from "react";

const GetElemClass = () => {
  return (
    <div>
      <h3>Tous les élements HTML correspondants à la classe mentionnée</h3>
      <pre>
        <code>
          {`
<p class="texte">Lorem Ipsum</p>

let texte = document.getElementByClassName("texte");
`}
        </code>
      </pre>
    </div>
  );
};

export default GetElemClass;
