export class Quote {
    showAuthor:boolean;
    
    constructor(public id:number, public  name: string, public  author:string,public submitedby: string, public createdDate:Date){
        this.showAuthor=false;
    }
}
