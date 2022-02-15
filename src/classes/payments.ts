import { HasFormatted } from '../interfaces/hasFormatted'

export class Payment implements HasFormatted{
    // readonly recipient: string;
    // private details: string;
    // public amount: number;
    
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) {}
    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}