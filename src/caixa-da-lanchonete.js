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

    calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
    }

}

export { CaixaDaLanchonete };
