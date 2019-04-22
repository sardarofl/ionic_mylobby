import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AfterSigningInPage } from './after-signing-in.page';

const routes: Routes = [
  {
    path: '',
    component: AfterSigningInPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AfterSigningInPage]
})
export class AfterSigningInPageModule {}
