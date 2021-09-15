import React from "react";

const FetchDelete = () => {
  return (
    <div>
      <h3>
        Fetch DELETE permet de supprimer des ressources à travers le réseau de
        manière asynchrone.
      </h3>
      <pre>
        <code>
          {`
fetch("API_URL/INDEXASUPPRIMER", {
  method: "DELETE"
})
`}
        </code>
      </pre>
    </div>
  );
};

export default FetchDelete;
