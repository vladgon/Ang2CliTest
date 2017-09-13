import {Routes} from '@angular/router';
import {VladComponent} from './vlad.component';
import {DynamicComponentComponent} from './dynamic-component/dynamic-component.component';

export const GLOBAL_ROUTS: Routes = [
    {path: '', redirectTo: 'welcome', pathMatch: 'prefix'},
    {path: 'welcome', component: VladComponent},
    {path: 'empty', component: DynamicComponentComponent}];
