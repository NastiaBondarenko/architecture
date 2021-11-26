import singl from './connection.js';
import * as query from 'querystring'


class Builder {
  constructor(connection) {
    this.connection = singl.returnconnection();
  }

  async select() {
  }    

  async delete() {
  }

  async insert() {
  }

  async update() {
   
  }
};

class Product extends Builder {

  select(fields, where){
    const  res = this.connection.query(`select * from product ${where};`);
    return res;
  }

  insert(values){
    let res = this.connection.query(`INSERT INTO product VALUES (${values});`);
    return res;
  }

 delete(where){
    let res = this.connection.query(`DELETE FROM product WHERE ${where};`);
    return res;
  }

  update(update, where){
    let res = this.connection.query(`UPDATE product SET ${update} WHERE ${where};`);
    return res;
  }

}


export {Product};