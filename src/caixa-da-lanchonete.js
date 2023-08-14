class CaixaDaLanchonete {
    constructor() {
        this.cardapio = [
            { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
            { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
            { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
            { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
            { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
            { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 },
            { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 }
        ];
        this.formaDePagamento = ['debito', 'credito', 'dinheiro'];
    }

    validarFormaDePagamento(formaDePagamento) {
        if (!this.formaDePagamento.includes(formaDePagamento)) {
            return 'Forma de pagamento inválida!';
        }
        return null;
    }

    validarItens(itens) {
        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }
        return null;
    }

    calcularValorComDescontoOuAcrecimo(total, formaDePagamento) {
        //desconto de 5% ou seja pagando 95% do valor então multiplico por 0.95
        if (formaDePagamento === 'dinheiro') {
            return total * 0.95;
        //acréscimo de 3% ou seja pagando 103% do valor então multiplico por 1.03
        } else if (formaDePagamento === 'credito') {
            return total * 1.03;
        }
        return total;
    }

    calcularTotal(opcaoMenu, quantidade) {
        // convertendo a string quantidade em um número inteiro usando a base decimal 
        return opcaoMenu.valor * parseInt(quantidade, 10);
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
      //inicializando avariável total
      let total = 0;

      const erroFormaPagamento = this.validarFormaDePagamento(metodoDePagamento);
      if (erroFormaPagamento) {
          return erroFormaPagamento;
      }

      const erroItens = this.validarItens(itens);
      if (erroItens) {
          return erroItens;
      }

      for (let item of itens) {
          //separando o código do item e a quantidade pela virgula
          const [codigo, quantidade] = item.split(',');
          const opcaoMenu = this.cardapio.find(opcao => opcao.codigo === codigo);

          if (!opcaoMenu) {
              return 'Item inválido!';
          }

          //verificação para que o item extra não seja pedido sem o principal
          if (codigo === 'chantily' || codigo === 'queijo') {
              //para verificar se algum item na lista itens começa com 'cafe' ou 'sanduiche'
              const hasCafe = itens.some(item => item.startsWith('cafe'));
              const hasSanduiche = itens.some(item => item.startsWith('sanduiche'));

              if (!hasCafe || !hasSanduiche) {
                  return 'Item extra não pode ser pedido sem o principal';
              }
          }

          total += this.calcularTotal(opcaoMenu, quantidade);
      }

      if (total === 0) {
          return 'Quantidade inválida!';
      }

      total = this.calcularValorComDescontoOuAcrecimo(total, metodoDePagamento);

      //formatando para 2 casas decimais e trocando o . pela , com o replace
      return `R$ ${total.toFixed(2).replace('.', ',')}`;
  }
}


export { CaixaDaLanchonete };
