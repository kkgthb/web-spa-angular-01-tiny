import { getGreeting } from "./helpers/getGreeting/getGreeting";
import { Component } from "@angular/core";

@Component({
    selector: 'app-greeting',
    template: '<h1>{{ greeting }}</h1>',
})

export class GreetingComponent {
    private static mockableGetGreeting = getGreeting;
    greeting: string;
    constructor() {
        this.updateGreeting();
    }
    updateGreeting() {
        this.greeting = GreetingComponent.mockableGetGreeting();
    }
}