import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'php',
    loadChildren: () => import('./tela-php/tela-php.module').then( m => m.TelaPhpPageModule)
  },
  {
    path: 'java',
    loadChildren: () => import('./tela-java/tela-java.module').then( m => m.TelaJavaPageModule)
  },
  {
    path: 'cplus',
    loadChildren: () => import('./tela-cplus/tela-cplus.module').then( m => m.TelaCplusPageModule)
  },
  {
    path: 'csharp',
    loadChildren: () => import('./tela-csharp/tela-csharp.module').then( m => m.TelaCsharpPageModule)
  },
  {
    path: 'html5',
    loadChildren: () => import('./tela-html5/tela-html5.module').then( m => m.TelaHtml5PageModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./tela-css/tela-css.module').then( m => m.TelaCssPageModule)
  },


  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
