import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycompComponent } from './mycomp/mycomp.component';
import { RpsComponent } from './rps/rps.component';
import { SplashComponent } from './splash/splash.component';
const routes: Routes = [
  {path: '', component: SplashComponent},
  { path: 'myComp', component: MycompComponent },
  { path: 'rps', component: RpsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
