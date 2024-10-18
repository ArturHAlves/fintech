import React from "react";
import DateInput from "./DateInput";

const DateRanger = () => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  
  return (
    <form className="box" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="FInal"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRanger;
