import { getGreeting } from "./getGreeting";

describe('getGreeting function', () => {
    it('should start with "Good "', () => {
        expect(getGreeting()).toMatch(/^Good /);
    });

    it('should be "Good morning!" in the morning', () => {
        jasmine.clock().mockDate(new Date('2025-01-01T08:00:00'));
        expect(getGreeting()).toBe('Good morning!');
    });

    it('should be "Good afternoon!" in the afternoon', () => {
        jasmine.clock().mockDate(new Date('2025-01-01T14:00:00'));
        expect(getGreeting()).toBe('Good afternoon!');

    });

    it('should be "Good evening!" in the evening', () => {
        jasmine.clock().mockDate(new Date('2025-01-01T20:00:00'));
        expect(getGreeting()).toBe('Good evening!'); // This test should fail, because the real getGreeting() returns "Good buggy evening!"

    });

    it('should ignore the real getGreeting() if we mock it', () => {
        const mockGetGreetingReturnValue = 'This is the mock return value';
        const getGreeting = jasmine.createSpy('getGreeting').and.returnValue(mockGetGreetingReturnValue); // Introduce a mock that overrides the real getGreeting().
        expect(getGreeting()).toBe(mockGetGreetingReturnValue); // This test should pass at any time of day, because of the mock getGreeting().
    });

});