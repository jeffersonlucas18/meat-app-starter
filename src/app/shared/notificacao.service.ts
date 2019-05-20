import {EventEmitter, Injectable} from '@angular/core';

@Injectable()

export class NotificacaoService {
  notificacao = new EventEmitter<string>();

  notifica(message:string){
    this.notificacao.emit(message);
  }

}
