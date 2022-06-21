import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './modules/app-material.module';
import { AppPluginsModule } from './modules/app-plugins.module';


const routerOptions: ExtraOptions = {
  useHash: true,
  enableTracing: true,
  relativeLinkResolution: 'legacy'
};


const innerpageRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  }
];


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppPluginsModule,
    RouterModule.forRoot(
      innerpageRoutes, routerOptions)
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppPluginsModule,
    RouterModule
  ],
  entryComponents: [],

})
export class AppRoutingModule { }
