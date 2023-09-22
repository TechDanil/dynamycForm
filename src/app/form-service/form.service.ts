import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FIELD_DESCRIPTIONS_URL, FORM_DATA_URL } from '../settings/settings';
import { catchError } from 'rxjs/operators';
import { IField } from '../interfaces/IField/IField';
import { HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
class FormService {
    constructor(private http: HttpClient) { }

    getFormData(): Observable<HttpResponse<Record<string, unknown>>> {
        return this.http.get<Record<string, unknown>>(FORM_DATA_URL, { observe: 'response' }).pipe(
            catchError((error) => {
                console.error('Error fetching form data:', error);
                return new Observable<HttpResponse<Record<string, unknown>>>();
            })
        );
    }

    getFieldDescriptions(): Observable<HttpResponse<readonly IField[]>> {
        return this.http.get<readonly IField[]>(FIELD_DESCRIPTIONS_URL, { observe: 'response' }).pipe(
            catchError((error) => {
                console.error('Error fetching field descriptions:', error);
                return new Observable<HttpResponse<readonly IField[]>>();
            })
        );
    }
}

export { FormService };
