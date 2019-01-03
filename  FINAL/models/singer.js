const db = require('../util/database');

module.exports = class Singer {
  constructor(singer_id, singer_name, date, style) {
    this.singer_id = singer_id;
    this.singer_name = singer_name;
    this.date = date;
    this.style = style;
  }

  // CREATE 
  static add(req, res) {
    //console.log('add():', req.body.name, req.body.price);
    return db.execute(
      'INSERT INTO singer (singer_name, date, style) VALUES (?, ?, ?, ?)',
      [req.body.singer_name, req.body.date,req.body.style]
    );
  }

  // READ
  static fetchAll() {
    return db.execute('SELECT * FROM singer');
  }

  static findById(singer_id) {
    return db.execute('SELECT * FROM singer where singer_id = ?', [singer_id]);
  }

  // UPDATE
  static updateById(req, res) {
    const singer_id = req.body.singer_id;
    const singer_name = req.body.singer_name;
    const style = req.body.style;
    const date = req.body.date;
    //const date = new Date();
    
    // console.log('model:updateById()', id, title, category, date, article)
    return db.execute(
      'UPDATE singer SET  singer_name = ?, date = ?, style = ? WHERE singer_id = ?', [singer_name,date,style,singer_id]
    );
  }


//   // DELETE
  static deleteById(singer_id) {
    return db.execute(
      'DELETE FROM singer WHERE singer_id = ?', [singer_id]
    );
  }


  static getCount() {
    return db.execute('SELECT COUNT(*) as count FROM singer');
  }
};