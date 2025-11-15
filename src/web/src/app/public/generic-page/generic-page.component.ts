import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GreetingComponent } from 'app/features/greeting/greeting.component';

@Component({
    standalone: true,
    selector: 'app-generic-page',
    imports: [GreetingComponent],
    template: `
        <app-greeting/>
        <p>This page has been rendered in the "{{genericPageName()}}" style.</p>
    `
})
export class GenericPageComponent {
    private route = inject(ActivatedRoute);
    genericPageName = computed((): string => {
        const genericPageNameDataInput: string = this.route.snapshot.data['genericPageName'];
        console.log(genericPageNameDataInput);
        if (!genericPageNameDataInput) {
            // Short-circuit to "Fallback" if there was no "genericPageName" data input to begin with.
            return 'Fallback';
        }
        if (!!this.route.snapshot.data['pathBased']) {
            // Amend generic page name to include "slug" route parameter value, if applicable
            const routeParamSlug = this.route.snapshot.paramMap.get('slug');
            if (!!routeParamSlug) {
                return `${genericPageNameDataInput} -- ${routeParamSlug}`;
            }
        }
        if (!!this.route.snapshot.data['queryBased']) {
            // Amend generic page name to include "now_on" query parameter value, if applicable
            const routeQueryNowOn = this.route.snapshot.queryParamMap.get('now_on');
            if (!!routeQueryNowOn) {
                return `${genericPageNameDataInput} -- ${routeQueryNowOn}`;
            }
        }
        return genericPageNameDataInput;
    });
}