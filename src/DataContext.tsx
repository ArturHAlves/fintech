import React from "react";
import useFetch from "../hooks/useFetch";
import { Venda } from "../../interfaces/IVenda.interface";

export interface IDataContext {
  data: Venda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = React.createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  const { data, loading, error } = useFetch<Venda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
