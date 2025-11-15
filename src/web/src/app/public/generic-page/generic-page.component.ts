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
    genericPageName = computed(() => {
        console.log(this.route.snapshot.data);
        return this.route.snapshot.data['genericPageName'] || 'Fallback';
    });
}