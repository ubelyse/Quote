import { Time } from '@angular/common';

export class Quote {
    showAuthor:boolean;
    
    constructor(public id:number, public  name: string, public  author:string, public createdDate:Date){
        this.showAuthor=false;
    }
}
