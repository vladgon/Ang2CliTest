import {Routes} from '@angular/router';
import {EmptyComponent} from './empty/empty.component';
import {VladComponent} from './vlad.component';

export const GLOBAL_ROUTS: Routes = [
    {path: '', redirectTo: 'welcome', pathMatch: 'prefix'},
    {path: 'welcome', component: VladComponent},
    {path: 'empty', component: EmptyComponent}];
