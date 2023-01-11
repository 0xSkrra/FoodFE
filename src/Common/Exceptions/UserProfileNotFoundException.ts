export class UserProfileNotFoundException extends Error{
    constructor(msg: string){
        super(msg);

        //set the prototype
        Object.setPrototypeOf(this, UserProfileNotFoundException.prototype)
    }
    getError = () => {
        console.log('Error: ' + this.message)
    }
}