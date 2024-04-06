const soletrar = (texto: string): string => {
  let resultado: string = texto.split("").join("-");

  return resultado;
};

console.log(soletrar("programador"));
