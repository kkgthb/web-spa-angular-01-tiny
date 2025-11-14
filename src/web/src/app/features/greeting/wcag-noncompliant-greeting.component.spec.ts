import { ComponentFixture, TestBed } from "@angular/core/testing";
import { WcagNoncompliantGreetingComponent } from "./wcag-noncompliant-greeting.component";
import { checkComponentWcag } from "app/shared/utils/axeWcagComponentChecker/axeWcagComponentChecker";

describe('Greetingcomponent', () => {
    let component: WcagNoncompliantGreetingComponent;
    let fixture: ComponentFixture<WcagNoncompliantGreetingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [WcagNoncompliantGreetingComponent] }).compileComponents();
        fixture = TestBed.createComponent(WcagNoncompliantGreetingComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Below is an integration test that we expect to fail.
    it('should have no WCAG 2.1 AA violations', async () => {
        await checkComponentWcag(fixture);
    });

});