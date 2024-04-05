const listaUsuarios: { nome: string; idade: number; status: boolean }[] = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const filtro = (
  lista: { nome: string; idade: number; status: boolean }[],
  usuario: string
) => {
  return lista.filter((item) =>
    item.nome.toLowerCase().includes(usuario.toLowerCase())
  );
};

const resultado = filtro(listaUsuarios, "Gui");
console.log(resultado);
