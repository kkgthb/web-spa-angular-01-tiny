import { ComponentFixture, TestBed } from "@angular/core/testing";
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

    it('should return a time-of-day-based getGreeting()', () => {
        expect(component.getGreeting()).toMatch(/^Good /); // This test should pass, because indeed:
        // 1. getGreeting() does indeed always return something that starts with "Good ".
        const mockDate = new Date('2025-01-01T08:00:00');
        jasmine.clock().mockDate(mockDate);
        expect(component.getGreeting()).toBe('Good morning!');
        mockDate.setHours(14);
        jasmine.clock().mockDate(mockDate);
        expect(component.getGreeting()).toBe('Good afternoon!');
        mockDate.setHours(20);
        jasmine.clock().mockDate(mockDate);
        expect(component.getGreeting()).toBe('Good evening!'); // This test should fail, because the real getGreeting() returns "Good buggy evening!"
    });

    it('should ignore the real getGreeting() if we mock it', () => {
        const mockGetGreetingReturnValue = 'Heya';
        spyOn(component, 'getGreeting').and.returnValue(mockGetGreetingReturnValue); // Introduce a mock that overrides the real getGreeting().
        expect(component.getGreeting()).toBe(mockGetGreetingReturnValue); // This test should pass, because of the mock getGreeting().
    });

});