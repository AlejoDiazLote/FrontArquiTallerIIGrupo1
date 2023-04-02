import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { DxCheckBoxModule, DxDataGridModule, DxFormModule, DxSortableModule, DxTabPanelModule, DxTemplateModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }), 
    DxDataGridModule,
     DxFormModule,
     DxTabPanelModule,
     DxCheckBoxModule,
     DxTemplateModule,
     DxSortableModule
   ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent
  ]
})
export class AppRoutingModule { }
