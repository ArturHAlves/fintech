import React from "react";
import { Venda } from "../interfaces/IVenda.interface";

export const SaleItem = ({ sale }: { sale: Venda }) => {
  return (
    <div className="sale box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {sale.id}
      </a>
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
