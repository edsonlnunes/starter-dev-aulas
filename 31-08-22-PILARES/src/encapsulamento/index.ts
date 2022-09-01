import { ContaBancaria } from "./conta-bancaria";

const conta = new ContaBancaria("Edson", "0001", "123456");

conta.visualizarSaldo("123456");

conta.alterarSenha("123456", "123");

conta.depositar(100, "123456");

conta.visualizarSaldo("123");

conta.depositar(300, "123");

conta.visualizarSaldo("123");

conta.sacar(200, "123");

conta.visualizarSaldo("123");

conta.sacar(1000, "123");

conta.visualizarSaldo("123");
