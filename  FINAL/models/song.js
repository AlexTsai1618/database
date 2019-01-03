const db = require('../util/database');

module.exports = class Song {
  constructor(song_id, song_name, song_singer) {
    this.song_id = song_id;
    this.song_name = song_name;
    this.song_singer = song_singer;
   
  }

  // CREATE 
  static add(req, res) {
    //console.log('add():', req.body.name, req.body.price);
    return db.execute(
      'INSERT INTO song (song_id,song_name, song_singer) VALUES (?, ?, ?)',
      [req.body.song_id, req.body.song_name, req.body.song_singer]
    );
  }

  // READ
  static fetchAll() {
    return db.execute('SELECT * FROM song');
  }

  static findById(song_id) {
    return db.execute('SELECT * FROM song where song_id = ?', [song_id]);
  }

  // UPDATE
  static updateById(req, res) {
    const song_id = req.body.song_id;
    const song_name = req.body.song_name;
    const song_singer = req.body.song_singer;
  
    //const date = new Date();
    
    // console.log('model:updateById()', id, title, category, date, article)
    return db.execute(
      'UPDATE song SET  song_name = ?, song_singer = ?WHERE song_id = ?', [song_name,song_singer,song_id]
    );
  }


//   // DELETE
  static deleteById(song_id) {
    return db.execute(
      'DELETE FROM song WHERE song_id = ?', [song_id]
    );
  }


  static getCount() {
    return db.execute('SELECT COUNT(*) as count FROM song');
  }
};