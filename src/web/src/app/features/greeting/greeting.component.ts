import { Component } from "@angular/core";

@Component({
    selector: 'app-greeting',
    template: '<h1>{{ greeting }}</h1>',
})

export class GreetingComponent {
    greeting: string;
    constructor() {
        this.updateGreeting();
    }
    getGreeting(): string {
        const hour = new Date().getHours();
        if (hour < 12) {
            return 'Good morning!';
        } else if (hour < 18) {
            return 'Good afternoon!';
        }
        else {
            return 'Good buggy evening!';
        }
    }
    updateGreeting() {
        this.greeting = this.getGreeting();
    }
}