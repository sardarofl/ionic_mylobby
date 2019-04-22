import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TakePhotoForVisitorPage } from './take-photo-for-visitor.page';

const routes: Routes = [
  {
    path: '',
    component: TakePhotoForVisitorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TakePhotoForVisitorPage]
})
export class TakePhotoForVisitorPageModule {}
