import { ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { GreetingComponent } from "./greeting.component";
import * as axe from 'axe-core';

describe('Greetingcomponent', () => {
    let component: GreetingComponent;
    let fixture: ComponentFixture<GreetingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [GreetingComponent] }).compileComponents();
        fixture = TestBed.createComponent(GreetingComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should wrap getGreeting() return value in an HTML H1 tag (mocked true unit test)', fakeAsync(() => {
        const mockGetGreetingReturnValue = 'Mockity mock mock mock'; // https://shashankvivek-7.medium.com/testing-a-component-with-stub-services-and-spies-in-jasmine-1428d4242a49
        const theFirstH1Tag = fixture.nativeElement.querySelector('h1');
        // Thank you to https://stackoverflow.com/a/48734437 for the "any" trick on the next line.
        spyOn<any>(GreetingComponent, 'mockableGetGreeting').and.returnValue(mockGetGreetingReturnValue); // Introduce a mock that overrides the real getGreeting().
        fixture.detectChanges();
        component.updateGreeting(); // updateGreeting()'s behavior is implicitly semi-mocked because it calls getGreeting(), which is explicitly mocked.
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(theFirstH1Tag.textContent)
                .withContext('should surround the hardcoded mock')
                .toEqual(mockGetGreetingReturnValue);
            expect(theFirstH1Tag.textContent)
                .withContext('should not include getGreeting()\'s usual "Good" phrasing because we mocked it')
                .toMatch(/^((?!Good).)*$/); // This is a regular expression for "does not contain 'Good'."  https://stackoverflow.com/a/406408
        });
    }));

    // Below is a demo of an integration test failing to be a proper unit test, because it does NOT use mocking.
    // Yes, it's tempting to do because it requires fewer lines of code.
    // But it doesn't follow "service layer" software architecture principles (https://katiekodes.com/subflow-service-layer-principles/), 
    // and if getGreeting() runs slowly, you've now written a slow-running test for no good reason.
    // Eat your veggies & write your mocks!  :)
    it('should wrap getGreeting() return value in an HTML H1 tag (antipattern -- unmocked potentially nonperformant integration test)', fakeAsync(() => {
        const theFirstH1Tag = fixture.nativeElement.querySelector('h1');
        fixture.detectChanges();
        component.updateGreeting(); // updateGreeting()'s behavior is implicitly semi-mocked because it calls getGreeting(), which is explicitly mocked.
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(theFirstH1Tag.textContent)
                .withContext('should not include getGreeting()\'s usual "Good" phrasing, because we did not bother to mock getGreeting()')
                .toMatch(/^Good /);
        });
    }));

    // Below is an integration test to ensure that the component is WCAG-compliant.
    it('should have no WCAG 2.1 AA violations', async () => {
        const results = await axe.run(fixture.nativeElement, {
            runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }
        });
        expect(results.violations.length)
            .withContext('WCAG violations:\n' + JSON.stringify(results.violations, null, 2))
            .toEqual(0);
    });

});