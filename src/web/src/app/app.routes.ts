import { Routes } from "@angular/router";
import { GenericPageComponent } from "./public/generic-page/generic-page.component";
import { PageNotFoundComponent } from "./public/page-not-found/page-not-found.component";

export const routes: Routes = [
    { path: '', component: GenericPageComponent, pathMatch: 'full' },
    { path: 'about', component: GenericPageComponent, data: { genericPageName: 'About Us' } },
    { path: '**', component: PageNotFoundComponent },
]