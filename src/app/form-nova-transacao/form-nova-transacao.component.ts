import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  tipoTransacao = "";
  valorTransacao = "";


  aoSubmeter(){
    console.log("tipo da Transação:", this.tipoTransacao);
    console.log("valor da Transação:", this.valorTransacao);
    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}