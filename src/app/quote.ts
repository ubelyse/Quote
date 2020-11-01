export class Quote {
    showAuthor:boolean;
    public numberOfUpvotes:number;
    public numberOfDownvotes:number;
 
    constructor(public id:number, public  name: string, public  author:string,public submitedby: string, public createdDate:Date){
        this.showAuthor=false;
        this.numberOfUpvotes =0;
        this.numberOfDownvotes =0;
    }
}
