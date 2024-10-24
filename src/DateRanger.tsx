import React from "react";
import { DataContext, IDataContext } from "./DataContext";
import DateInput from "./components/DateInput";

const DateRanger = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { inicio, setInicio, final, setFinal } = React.useContext<IDataContext>(DataContext as any);
  
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
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
