import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../data/hooks/useFetch";
import { Venda } from "../interfaces/IVenda.interface";
import Loading from "../components/Loading";

type saleWithoutDate = Omit<Venda, "data">;

export const Sale = () => {
  const { id } = useParams();

  const { data, loading } = useFetch<saleWithoutDate>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) return <Loading />;
  if (data === null) return null;

  return (
    <div>
      <div className="box mb">Código: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};
