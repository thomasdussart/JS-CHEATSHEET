import React from "react";

const Fetch = () => {
  return (
    <div>
      <h3>
        Fetch GET permet de recevoir des ressources à travers le réseau de
        manière asynchrone.
      </h3>
      <pre>
        <code>
          {`
fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => console.log(data));
`}
        </code>
      </pre>
    </div>
  );
};

export default Fetch;
