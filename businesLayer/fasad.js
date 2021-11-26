import { Product} from '../persistenseLayer/requests.js';
import {Ispetification} from './specification.js'


class Fasad{
	constructor(){
		this.classArray = [new insertHendler(), new selectHendler(),  new updateHendler(), new deleteHendler()];
		this.product = new Product;
	}

	async chainOfResponsibility(url, body){
		for (let i = 0 ; i < this.classArray.length; i++){
			if (this.classArray[i].url == url){
				const res = await this.classArray[i].request(body, this.product);
				// console.log(res)
				return res;
			}
		}
	}

}


class baseHandler{
	constructor(url){
		this.url = url;
	}
	async request(){}
} 




class insertHendler extends baseHandler{
	constructor(){
		super('/addProduct');
	}	
	async request(body, product){
		if (body.price == '' && body.name == '') return "Дані введені не коректно"
		let num = Math.floor(Math.random() * 10000);
		let str = `'${num}','${body.name}', '${body.price}'`;
		let res = await product.insert(str);
		if (res.command == "INSERT") return "Товар додано";
	}
}


class selectHendler extends baseHandler{
	constructor(){
		super('/viewProduct');
	}
	async request(body, product){
		let where = `where productname like '%${body.name}%' `;
		if (body.priceTo != '') where +=` and price < '${body.priceTo}'`;
		if (body.priceFrom != '') where += ` and price > '${body.priceFrom}'`;
		const res = await product.select('*', where);
		return res.rows;
	}
}


class updateHendler extends baseHandler{
	constructor(){
		super('/updateProduct');
	}
	async request(body, product){
		if((body.name =="" && body.price == "") || (body.newName =="" && body.newPrice == "")) return "Дані введені не коректно"
		let instr = new Ispetification(body)
		let update = instr.relisationNew();
		console.log("update", update)
		let where = instr.relisationWhere();
		console.log("where", where)
		const res =  await product.update(update, where);
		if (res.command == "UPDATE") return "Дані про товар оновлено";
	}
}


class deleteHendler extends baseHandler{
	constructor(){
		super('/deleteProduct');
	}
	async request(body, product){
		let instr = new Ispetification(body)
		let where = instr.relisationWhere();
		const res = await product.delete(where);
		console.log(res)
		if (res.command == "DELETE" && res.rowCount == 1) return "Товар видалено";
		return "Дані про товар введені не коректно";

	}
}


let f = new Fasad()


export {f};	