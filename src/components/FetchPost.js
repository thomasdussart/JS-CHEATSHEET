import React from "react";

const FetchPost = () => {
  return (
    <div>
      <h3>
        Fetch POST permet d'envoyer des ressources à travers le réseau de
        manière asynchrone.
      </h3>
      <pre>
        <code>
          {`
let data = {
  nom: maVariableNom,
  prenom: maVariablePrenom
}
fetch("URL_API", {
  method: "POST",
  body: JSON.stringify(data)
}) 
`}
        </code>
      </pre>
    </div>
  );
};

export default FetchPost;
