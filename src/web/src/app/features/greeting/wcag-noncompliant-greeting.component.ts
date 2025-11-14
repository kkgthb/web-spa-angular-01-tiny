import { getGreeting } from "./helpers/getGreeting/getGreeting";
import { Component } from "@angular/core";

@Component({
    selector: 'app-greeting',
    template: '<h1 style="color: #AAAAAA; background-color: #FFFFFF;">{{ greeting }}</h1>',
})

export class WcagNoncompliantGreetingComponent {
    private static mockableGetGreeting = getGreeting;
    greeting: string;
    constructor() {
        this.updateGreeting();
    }
    updateGreeting() {
        this.greeting = WcagNoncompliantGreetingComponent.mockableGetGreeting();
    }
}