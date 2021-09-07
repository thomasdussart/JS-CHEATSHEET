import React from "react";

const SwitchStatement = () => {
  return (
    <div>
      <h3>
        L'instruction switch évalue une expression et, selon le résultat obtenu
        et le cas associé, exécute les instructions correspondantes.
      </h3>

      <code>
        {`
let SiriusTeam = ["Jeremy","Christophe","Julie","Thomas","Laetitia","Laura"];

switch(SiriusTeam) {
    case "Jeremy":
        console.log("Jeremy");
        break;
    case "Christophe":
        console.log("Christophe");
        break;
    case "Julie":
        console.log("Julie");
        break;
    case "Thomas":
        console.log("Thomas");
        break;
    case "Laetitia":
        console.log("Laetitia");
        break;
    case "Laura":
        console.log("Laura");
        break;
    default:
        console.log("Error");
        break;
}
`}
      </code>
    </div>
  );
};

export default SwitchStatement;
