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

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponentComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
  ],
  //引入表单相关的模块后才能用双向数据绑定 - FormsModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class AppModule { }
