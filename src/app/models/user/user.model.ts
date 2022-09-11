export class User {

    constructor(
        public name: string,
        public email: string,
        public role: string,
        public isActive: string,
        public password?: string,
        public google?: boolean,
        public img?: string,
        public uid?: string
    ) { }
}