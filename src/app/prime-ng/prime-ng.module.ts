import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  exports: [MenubarModule],
})
export class PrimeNgModule {}
