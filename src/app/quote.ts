export class Quote {
	public showDetails:boolean;
	
	constructor(public id:number, public quote:string, public name:string, public author:string){
		this.showDetails=false
		
	}
}
