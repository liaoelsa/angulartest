import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { HeaderComponent } from './component/header/header.component';
import { FormComponent } from './component/form/form.component';
import { SearchComponent } from './component/search/search.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { StorageService } from './service/storage.service'
import { from } from 'rxjs';
import { DlHostDirective } from './dl-host.directive';
import { DynamicTestComponent } from './component/dynamic/dynamic-test/dynamic-test.component';
import { AComponent } from './component/dynamic/a/a.component';
import { RequestTestComponent } from './component/request-test/request-test.component';
import { RequestService } from './service/request.service';
import { HighlightDirective } from './directive/dynamic/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponentComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    DlHostDirective,
    DynamicTestComponent,
    AComponent,
    RequestTestComponent,
    HighlightDirective,
  ],
  entryComponents: [
    TodolistComponent,
    AComponent
  ],
  //引入表单相关的模块后才能用双向数据绑定 - FormsModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService, RequestService],
  bootstrap: [DynamicTestComponent]
})
export class AppModule { }
