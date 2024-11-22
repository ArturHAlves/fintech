import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Venda } from "../interfaces/IVenda.interface";

type VendaDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: Venda[]): VendaDay[] {
  const days = data.reduce((acc: { [key: string]: VendaDay }, item) => {
    const day = item.data.split(" ")[0];
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[day][item.status] += item.preco;    
    return acc;
  }, {});

  return Object.values(days).map((day) => ({
    ...day,
    data: day.data.substring(5),
  }));
}

export const SalesChart = ({ data }: { data: Venda[] }) => {
  return (
    <ResponsiveContainer width={"99%"} height={400}>
      <LineChart data={transformData(data)}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="pago" stroke="#387908" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#ff7300"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="red" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};
