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




import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/throw';

export class ErrorHandle {

  static handleError(error: HttpErrorResponse | any) {

    let errorMessage: string;
    if (error instanceof HttpErrorResponse) {
        const body = error.error
        errorMessage = `Erro ${error.status} ao  obter a URL ${error.url} - ${error.statusText || ''} ${body}`;
    }else {
      errorMessage = error.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
