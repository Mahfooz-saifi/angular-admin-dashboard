import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Component61Component } from './component61/component61.component';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { TabMenuModule } from 'primeng/tabmenu';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    Component61Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    CardModule,
    DialogModule,
    ToggleButtonModule,
    ButtonModule,
    InputTextModule,
    ChipsModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
