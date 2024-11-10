import React from "react";
import { Venda } from "../interfaces/IVenda.interface";
import { NavLink } from "react-router-dom";

export const SaleItem = ({ sale }: { sale: Venda }) => {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: "monospace" }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};
