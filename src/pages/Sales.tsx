import React from "react";
import { DataContext, IDataContext } from "../data/contexts/DataContext";
import { SaleItem } from "../components/SaleItem";

export const Sales = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = React.useContext<IDataContext>(DataContext as any);

  if (data === null) return null;

  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};
