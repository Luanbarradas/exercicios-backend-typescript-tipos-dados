const obj: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
} = {
  produto: "CPU Dual Core 3.0GHZ",
  lote: 321,
  ano: 2022,
  qtd: 5,
};

const etiquetador = (objetos: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  const resultado: string[] = [];
  for (let i = 1; i <= objetos.qtd; i++) {
    resultado.push(
      `${objetos.lote}-${objetos.ano}-${i.toString().padStart(3, "0")}`
    );
  }
  return resultado;
};

console.log(etiquetador(obj));
