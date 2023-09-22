import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { FormService } from './form-service/form.service';
import { FormInterceptor } from './form-interceptor/form.interceptor';
import { DynamicModule } from 'ng-dynamic-component';
import { NumberEditorComponent } from './number-editor/number-editor.component';
import { DateEditorComponent } from './date-editor/date-editor.component';
import { BooleanEditorComponent } from './boolean-editor/boolean-editor.component';
import { FormComponent } from './form/form.component';
import { ItemListComponent } from './item-list-component/item-list-component.component';
import { AppXComponent } from './app-x-component/app-x-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, FormComponent, TextEditorComponent, NumberEditorComponent, DateEditorComponent, BooleanEditorComponent, ItemListComponent, AppXComponent],
    imports: [DynamicModule, BrowserModule, HttpClientModule, FormsModule],
    providers: [
        FormService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FormInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }
