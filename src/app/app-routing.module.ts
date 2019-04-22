import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'welcomevisitor', loadChildren: './welcomevisitor/welcomevisitor.module#WelcomevisitorPageModule' },
  { path: 'selecthost', loadChildren: './selecthost/selecthost.module#SelecthostPageModule' },
  { path: 'takephoto', loadChildren: './takephoto/takephoto.module#TakephotoPageModule' },
  { path: 'visitordata', loadChildren: './visitordata/visitordata.module#VisitordataPageModule', canActivate:[AuthGuardService] },
  { path: 'signin-success', loadChildren: './signin-success/signin-success.module#SigninSuccessPageModule' },
  { path: 'signin-fail', loadChildren: './signin-fail/signin-fail.module#SigninFailPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'confirm-visitor-signin', loadChildren: './confirm-visitor-signin/confirm-visitor-signin.module#ConfirmVisitorSigninPageModule' },
  { path: 'take-photo-for-visitor', loadChildren: './take-photo-for-visitor/take-photo-for-visitor.module#TakePhotoForVisitorPageModule' },
  { path: 'after-signing-in', loadChildren: './after-signing-in/after-signing-in.module#AfterSigningInPageModule' },
  { path: 'printing-badge-page', loadChildren: './printing-badge-page/printing-badge-page.module#PrintingBadgePagePageModule' },
  { path: 'choose-site', loadChildren: './choose-site/choose-site.module#ChooseSitePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
