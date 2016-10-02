import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
	{
		path: '',
    	component: HomeComponent
	},
	{
		path: 'about',
    	component: AboutComponent
	},

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

