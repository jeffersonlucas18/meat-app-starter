// import {Response} from '@angular/http';
// import {Observable} from 'rxjs';
// import 'rxjs/add/observable/throw';
//
// export class AppErrohandle {
//   static handlError(error: Response | any) {
//     let erroMessage: string;
//     if (error instanceof Response) {
//       erroMessage = `${error.status} ao obter ${error.url} - ${error.statusText}`;
//     }else {
//       erroMessage = error.toString();
//     }
//     console.log(erroMessage);
//     return Observable.throw(erroMessage);
//   }
// }




import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/throw';

export class ErrorHandle {

  static handleError(error: Response | any) {

    let errorMessage: string;
    if (error instanceof Response) {
        errorMessage = `Erro ${error.status} ao  obter a URL ${error.url} - ${error.statusText}`;
    }else {
      errorMessage = error.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
