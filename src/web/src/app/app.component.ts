import { Component, } from '@angular/core';
import { GreetingComponent } from './features/greeting/greeting.component';
@Component({
    selector: 'app-root',
    template: '<main><app-greeting/></main>',
    imports: [GreetingComponent],
})
export class AppComponent { }