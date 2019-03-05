import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NofoundComponent } from './components/nofound/nofound.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoaderComponent } from './components/loader/loader.component';



const routes: Route[] = [
    { path: 'u/:id', component: LandingComponent },
    { path: 'loader', component: LoaderComponent },
    { path: '404', component: NofoundComponent },
    { path: '**', component: NofoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}