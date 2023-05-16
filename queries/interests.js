const db = require('../db/dbConfig.js');

const getAllInterests = async () => {
    try {
        const result = await db.any("SELECT * FROM interests");
        return { result };
      } catch (error) {
        return { error };
      }
}


const getInterest = async (id) => {
    try {
      const result = await db.any(`SELECT * FROM interests WHERE id=${id}`);
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const createInterest = async (interest) => {
    try {
      const result = await db.one(
        `INSERT INTO
          interests(name,  media_type, genre, still_enjoy, img_link)
         VALUES
          ($1, $2, $3, $4, $5)
         RETURNING *;`,
        [interest.name, interest.media_type, interest.genre, interest.still_enjoy, interest.img_link]
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const deleteInterest = async (id) => {
    try {
      const result = await db.one(
        "DELETE FROM interests WHERE id=$1 RETURNING *",
        id
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const updateInterest = async (id, interest) => {
    try {
      const result = await db.one(
        `UPDATE interests SET name=$1, media_type=$2, genre=$3, still_enjoy=$4, img_link=$5 WHERE id=$6 RETURNING *`,
        [interest.name, interest.media_type, interest.genre, interest.still_enjoy, interest.img_link, id]
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

module.exports = {
    getAllInterests,
    getInterest,
    createInterest,
    deleteInterest,
    updateInterest
}