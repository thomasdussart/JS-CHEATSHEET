import React from "react";

const GetElemID = () => {
  return (
    <div>
      <h3>Element HTML correspondant à l'ID mentionné</h3>
      <pre>
        <code>
          {`
<p id="texte">Lorem Ipsum</p>

let texte = document.getElementById("texte");
`}
        </code>
      </pre>
    </div>
  );
};

export default GetElemID;
