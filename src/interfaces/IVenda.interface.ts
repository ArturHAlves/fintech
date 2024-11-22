type Status = "processando" | "pago" | "falha";

type Pagamento = "boleto" | "pix" | "cartao";

export interface Venda {
  id: string;
  nome: string;
  preco: number;
  status: Status;
  pagamento: Pagamento;
  parcelas: number | null;
  data: string;
}
