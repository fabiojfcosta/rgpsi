import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './primeng.module';
import { MenubarComponent } from './layout/menubar/menubar.component';
import { Section1Component } from './layout/section1/section1.component';
import { Section2Component } from './layout/section2/section2.component';
import { Section3Component } from './layout/section3/section3.component';
import { Section4Component } from './layout/section4/section4.component';
import { ContactsComponent } from './layout/contacts/contacts.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PanelModule } from 'primeng/panel';
import { IntroductionComponent } from './layout/introduction/introduction.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    ContactsComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    TabMenuModule,
    FontAwesomeModule,
    PanelModule,
    ImageModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
