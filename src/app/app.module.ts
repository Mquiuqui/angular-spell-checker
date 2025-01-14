import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SpellCorrectorComponent } from './spell-corrector/spell-corrector.component';

@NgModule({
    declarations: [
        AppComponent,
        SpellCorrectorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule  
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
