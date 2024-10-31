import React from "react";
import { DataContext, IDataContext } from "../data/contexts/DataContext";

const Resume = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = React.useContext<IDataContext>(DataContext as any);

  if (data === null) return null;

  return (
    <section>
      <div className="resume flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((sale) => sale.status !== "falha")
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue.preco,
                0
              )
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>

        <div className="box">
          <h2>Recebidos</h2>
          <span>
            {data
              .filter((sale) => sale.status === "pago")
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue.preco,
                0
              )
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>

        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((sale) => sale.status === "processando")
              .reduce(
                (accumulator, currentValue) => accumulator + currentValue.preco,
                0
              )
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Resume;
