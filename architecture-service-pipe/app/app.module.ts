
// Entry point of our application

import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookListComponent } from './components/book/booklist.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HeaderComponent,
    MenuComponent,
    BookListComponent,
    SideBarComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
