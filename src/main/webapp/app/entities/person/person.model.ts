import { BaseEntity } from './../../shared';

export class Person implements BaseEntity {
    constructor(
        public id?: number,
        public lastname?: string,
        public dob?: any,
    ) {
    }
}
