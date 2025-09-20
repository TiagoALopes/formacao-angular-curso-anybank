import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { TipoTransacao, Transacao } from './modelos/transacao';
import { ExtratoComponent } from "./extrato/extrato.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((accumulador, transacaoAtual) => {
        switch (transacaoAtual.tipo) {
          case TipoTransacao.SAQUE:
            return accumulador - transacaoAtual.valor;
          case TipoTransacao.DEPOSITO:          
            return accumulador + transacaoAtual.valor;
          default:
            throw new Error("Tipo de transação inválida");
        }
    }, 0);
  });

  processarTransacao(transacao: Transacao){
    if (transacao.tipo === TipoTransacao.SAQUE && transacao.valor > this.saldo()){
      return alert('Saldo insuficiente!');
    }
    this.transacoes.update((listaAtual => [transacao, ...listaAtual]));
  }
}
