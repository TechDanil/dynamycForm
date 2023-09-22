import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormService } from '../form-service/form.service';
import { FIELD_DESCRIPTIONS_URL, FORM_DATA_URL } from '../settings/settings';

@Injectable()
class FormInterceptor implements HttpInterceptor {
    constructor(private formService: FormService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes(`${FORM_DATA_URL}`)) {
            return this.formService.getFormData().pipe();
        } else if (req.url.includes(`${FIELD_DESCRIPTIONS_URL}`)) {
            return this.formService.getFieldDescriptions().pipe();
        } else {
            return next.handle(req);
        }
    }
}

export { FormInterceptor };
