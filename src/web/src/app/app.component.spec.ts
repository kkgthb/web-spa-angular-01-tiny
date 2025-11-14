import { ComponentFixture, TestBed, fakeAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { checkComponentWcag } from "./shared/utils/axeWcagComponentChecker/axeWcagComponentChecker";

describe('Appcomponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Below is an integration test to ensure that the App component is WCAG-compliant.
    it('should have no WCAG 2.1 AA violations', async () => {
        await checkComponentWcag(fixture);
    });

});