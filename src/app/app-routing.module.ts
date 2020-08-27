import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';





const routes: Routes = [
    { path: '**', component: HeaderComponent },
];



export const APP_ROUTING = RouterModule.forRoot(routes);
