import React from "react";
import { DataContext, IDataContext } from "../data/contexts/DataContext";

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

const getMonth = (number: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + number);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
};

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const MonthBtn = ({ numberMonth }: { numberMonth: number }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setInicio, setFinal } = React.useContext<IDataContext>(DataContext as any);

  const setMonth = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  };

  return (
    <button style={style} onClick={() => setMonth(numberMonth)}>
      {getMonth(numberMonth)}
    </button>
  );
};
