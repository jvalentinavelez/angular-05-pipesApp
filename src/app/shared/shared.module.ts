import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, PrimeNgModule, RouterLink],
  exports: [MenuComponent],
})
export class SharedModule {}
