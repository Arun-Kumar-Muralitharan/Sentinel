import { faker } from '@faker-js/faker';

export class dataGenerator {
    constructor() {
        this.faker = faker;
    }
    /**
     * Generates a random email address.
     * @returns {string} Random email
     */
    static generateEmail() {
        return faker.internet.email();
    }

    /**
     * Generates a random first name.
     * @returns {string} First name
     */
    static generateFirstName() {
        return faker.person.firstName();
    }

    /**
     * Generates a random last name.
     * @returns {string} Last name
     */
    static generateLastName() {
        return faker.person.lastName();
    }

    /**
     * Generates a random full name.
     * @returns {string} Full name
     */
    static generateFullName() {
        return faker.person.fullName();
    }

    /**
     * Generates a random phone number.
     * @returns {string} Phone number
     */
    static generatePhoneNumber() {
        return faker.phone.number();
    }

    /**
     * Generates a random date in the past.
     * @summary pass years, months, or days in options as a number with refDate: new Date(date) if needed
     * @param {Object} [options] - Optional settings for date range
     * @returns {Date} Date in the past
     */
    static generatePastDate(options = {}) {
        return faker.date.past(options);
    }

    /**
     * Generates a present/recent date (defaults to within the last 24 hours).
     * @returns {Date} Recent/present date
     */
    static generatePresentDate() {
        return faker.date.recent();
    }

    /**
     * Generates a random date in the future.
     * @summary pass years, months, or days in options as a number with refDate: new Date(date) if needed
     * @param {Object} [options] - Optional settings for date range
     * @returns {Date} Date in the future
     */
    static generateFutureDate(options = {}) {
        return faker.date.future(options);
    }

    /**
     * Generates a random block of text (sentence or paragraph).
     * @param {string} [type='sentence'] - 'sentence' or 'paragraph'
     * @returns {string} Random text
     */
    static generateRandomText(type = 'sentence') {
        if (type === 'paragraph') {
            return faker.lorem.paragraph();
        }
        return faker.lorem.sentence();
    }

    static randomInt(min, max) {
        return faker.number.int({ min, max });
    }

}

export default dataGenerator;