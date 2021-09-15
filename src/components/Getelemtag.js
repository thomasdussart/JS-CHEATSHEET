import React from "react";

const GetElemTag = () => {
  return (
    <div>
      <h3>Tous les élements HTML correspondants à la balise mentionnée</h3>
      <pre>
        <code>
          {`
<p>Lorem Ipsum</p>

let texte = document.getElementByTagName("p");
`}
        </code>
      </pre>
    </div>
  );
};

export default GetElemTag;
