import {Routes} from '@angular/router';
import {VladComponent} from './vlad.component';
import {DynamicComponentComponent} from './dynamic-component/dynamic-component.component';

export const GLOBAL_ROUTS: Routes = [
    {path: 'welcome', component: VladComponent},
    {path: 'empty', component: DynamicComponentComponent},
    {path: '', component: VladComponent, pathMatch: 'prefix'},
    {path: '**', redirectTo: ''}];
