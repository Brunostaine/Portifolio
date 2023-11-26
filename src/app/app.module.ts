import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as ScrollReveal from 'scrollreveal'; // Não pode apagar esse import
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
