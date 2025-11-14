import { type ComponentFixture } from "@angular/core/testing";
import * as axe from 'axe-core';

/**
 * Runs axe-core accessibility checks on the provided Angular component fixture.
 * Fails the test if any WCAG violations are found.
 * 
 * @param fixture - The Angular ComponentFixture to check.
 */
const checkComponentWcag = async <T>(fixture: ComponentFixture<T>): Promise<void> => {
    const theComponentHtmlElement: HTMLElement | null = fixture.nativeElement;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const results = await axe.run(theComponentHtmlElement, {
        //runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }
    });
    expect(results.violations.length)
        .withContext('WCAG violations:\n' + JSON.stringify(results.violations, null, 2))
        .toEqual(0);
}

export { checkComponentWcag }