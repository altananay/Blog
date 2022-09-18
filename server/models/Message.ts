export class Message
{
    private fullName: string;
    private email: string;
    private message: string;

    constructor(fullName: string, email:string, message:string)
    {
        this.fullName = fullName,
        this.email = email
        this.message = message
    }
}