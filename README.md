# primo

aplicação para testar se um número é primo em nodejs :)

se você precisa de uma função que teste a mesma coisa em javascript puro (vanilla), eis aqui:

const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
  };
