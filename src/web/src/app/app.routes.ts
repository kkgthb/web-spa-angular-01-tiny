import { Routes } from "@angular/router";
import { GenericPageComponent } from "./public/generic-page/generic-page.component";
import { PageNotFoundComponent } from "./public/page-not-found/page-not-found.component";

export const routes: Routes = [
    { path: '', component: GenericPageComponent, pathMatch: 'full' },
    { path: 'about', component: GenericPageComponent, data: { genericPageName: 'About Us' } },
    { path: 'dynamic_path_based', component: GenericPageComponent, data: { genericPageName: 'Parent catch-all for Dynamic (path-based)', pathBased: false, } },
    { path: 'dynamic_path_based/:slug', component: GenericPageComponent, data: { genericPageName: 'Dynamic (path-based)', pathBased: true, } },
    { path: 'dynamic_query_based', component: GenericPageComponent, data: { genericPageName: 'Dynamic (query-parameter-based)', queryBased: true, } },
    { path: '**', component: PageNotFoundComponent },
]