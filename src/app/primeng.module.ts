import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule,
  ]
})
export class PrimeNgModule {}
