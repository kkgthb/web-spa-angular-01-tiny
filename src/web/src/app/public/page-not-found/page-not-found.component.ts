// Note:  Because this is a single-page app, 
// the CDN will merely return an `index.html` file and a 200 status code as an HTTP response.
// We can put "404" as text on the page, 
// but it won't be a true 404 error at the HTTP response level.

import { Component, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-page-not-found',
    template: `
    <div role="alert" aria-live="assertive">
        <h1>404 - Page Not Found</h1>
        <p>The page you requested does not exist.</p>
    </div>
    `
})
export class PageNotFoundComponent {
    constructor() {
        const meta = inject(Meta);
        const title = inject(Title);
        title.setTitle('404 - Page Not Found');
        meta.addTag({ name: 'robots', content: 'noindex' });
        meta.addTag({ name: 'googlebot', content: 'noindex' });
    }
}