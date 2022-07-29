export class Items{
    id:number;
    name:string;
    price:number;
    url:string;
    description:string;
    count:number;
    // not in json.data
    //need it for know how many pieces user want
   

    constructor(){
        this.id=0;
        this.name='';
        this.price=0;
        this.url='';
        this.description='';
        this.count=1;
    }
}