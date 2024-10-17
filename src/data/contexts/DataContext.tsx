import React from "react";
import useFetch from "../hooks/useFetch";
import { Venda } from "../../interfaces/IVenda.interface";

interface IDataContext {
  data: Venda[] | null;
  loading: boolean;
  error: string | null;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<Venda[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
