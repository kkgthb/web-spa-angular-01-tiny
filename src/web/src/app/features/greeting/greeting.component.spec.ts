import { ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { GreetingComponent } from "./greeting.component";

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

    it('should wrap getGreeting() return value in an HTML H1 tag', fakeAsync(() => {
        const mockGetGreetingReturnValue = 'Mockity mock mock mock'; // https://shashankvivek-7.medium.com/testing-a-component-with-stub-services-and-spies-in-jasmine-1428d4242a49
        const theFirstH1Tag = fixture.nativeElement.querySelector('h1');
        // Thank you to https://stackoverflow.com/a/48734437 for the "any" trick on the next line.
        spyOn<any>(GreetingComponent, 'mockableGetGreeting').and.returnValue(mockGetGreetingReturnValue); // Introduce a mock that overrides the real getGreeting().
        fixture.detectChanges();
        component.updateGreeting(); // updateGreeting()'s behavior is implicitly semi-mocked because it calls getGreeting(), which is explicitly mocked.
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(theFirstH1Tag.textContent).toEqual(mockGetGreetingReturnValue); // This test should pass, because indeed:
            // 1. our template code does surround {{ greeting }} in an H1 tag.
        });

    }));

});