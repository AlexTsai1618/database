const db=require('../util/database');
module.exports=class Product{
  constructor(id,name,price){
    this.id=id;
    this.name=name;
    this.price=price;
  }
  //CREATE 
  static add(req,res){
      return db.execute(
          'INSERT INTO product(name,price) VALUES(?,?)',
          [req.body.name, req.body.price]
      );

  }
  //READ
  static fetchAll(){
      return db.execute('SELECT * FROM product');
  }    
  static findById(id){
      return db.execute('SELECT * FROM product WHERE id = ?',[id]);
  }
  //UPDATE
  static updateById(req,res){
      return db.execute('UPDATE product SET name = ?,price= ? WHERE id = ?',[req.body.name,req.body.price,req.body.id]);
  }
  //DELETE
  static deleteById(id){
      return db.execute('DELETE FROM product WHERE id = ?',[id]);
  }

}