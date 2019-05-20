import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {NotificacaoService} from '../../notificacao.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibile', [
      state('hidden', style({opacity: 0, bottom: '0px' })),
      state('visible', style({opacity: 1, bottom: '30px'})),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

   messagem:string = 'hellooo';

  snackVisibled: string = 'hidden';

  constructor(private notificaService: NotificacaoService) { }

  ngOnInit() {
  this.messageEm();
  }
  messageEm(){
    this.notificaService.notificacao.do(message => {
      this.messagem = message;
      this.snackVisibled = 'visible'
    }).switchMap(message => Observable.timer(3000))
      .subscribe(timer => this.snackVisibled = 'hidden')
  }

  // togglesnack(){
  //   this.snackVisibled = this.snackVisibled === 'hidden' ? 'visible' : 'hidden'
  // }
}
