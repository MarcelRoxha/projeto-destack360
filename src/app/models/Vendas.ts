export class Vendas {
    constructor(
        public codigo?: string,
        public venda: string='',
        public vendadesconto: string='',     
    ){}
    /*a ? e para possibitar a utilizção da propriedade codigo
    para todos os metodos do CRUD */
}