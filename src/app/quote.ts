export class Quote {
    showAuthor:boolean;
    public Upvote:number
    public Downvote:number

    constructor(public id:number, public  name: string, public  author:string){
        this.showAuthor=false;
        this.Upvote=0;
        this.Downvote=0;
    }
 
}
