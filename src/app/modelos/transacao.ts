export class Transacao {
    // tipoTransacao: string = "";
    // valorTransacao: number = 0;

    // constructor(tipo: TipoTransacao, valor: number){
    //     this.tipoTransacao = tipo;
    //     this.valorTransacao = valor;
    // }

    constructor(
        public readonly tipo: TipoTransacao, 
        public readonly valor: number
    ){}
}

export enum TipoTransacao {
    DEPOSITO = "deposito",
    SAQUE = "saque"
}
