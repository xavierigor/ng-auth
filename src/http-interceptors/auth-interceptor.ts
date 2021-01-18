import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountService } from "src/app/services/shared/account.service";
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor (private accountService: AccountService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.accountService.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if (token) {
            // o request é imutável, portanto é preciso
            // fazer um clone para conseguir mudar suas propriedades
            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        return next.handle(request).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('Ocorreu um erro', error.error.message);
        } else {
            console.error(
                `Código do erro: ${error.status}`,
                `Erro: ${JSON.stringify(error.error)}`
            )
            return throwError('Ocorreu um erro, tente novamente');
        }
    }
}