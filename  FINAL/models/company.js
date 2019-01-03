const db = require('../util/database');

module.exports = class Company {
  constructor(singer_id, song_id, company, years) {
    this.singer_id = singer_id;
    this.song_id = song_id;
    this.company = company;
    this.years = years;
  }

  // CREATE 
  static add(req, res) {
    //console.log('add():', req.body.name, req.body.price);
    return db.execute(
      'INSERT INTO company (singer_id,song_id, company, years) VALUES (?, ?, ?, ?)',
      [req.body.singer_id, req.body.song_id, req.body.company,req.body.years]
    );
  }

  // READ
  static fetchAll() {
    return db.execute('SELECT * FROM company');
  }

  static findById(singer_id) {
    return db.execute('SELECT * FROM company where singer_id = ?', [singer_id]);
  }

  // UPDATE
  static updateById(req, res) {
    const singer_id = req.body.singer_id;
    const song_id = req.body.song_id;
    const company= req.body.company;
    const years= req.body.years;
    //const date = new Date();
    
    // console.log('model:updateById()', id, title, category, date, article)
    return db.execute(
      'UPDATE company SET  song_id = ?, company = ?, years = ? WHERE singer_id = ?', [song_id,company,years,singer_id]
    );
  }


//   // DELETE
  static deleteById(singer_id) {
    return db.execute(
      'DELETE FROM company WHERE singer_id = ?', [singer_id]
    );
  }


  static getCount() {
    return db.execute('SELECT COUNT(*) as count FROM company');
  }
};