import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WelcomevisitorPage } from './welcomevisitor.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomevisitorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WelcomevisitorPage]
})
export class WelcomevisitorPageModule {}
