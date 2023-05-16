const db = require('../db/dbConfig.js');

const getAllProjects = async () => {
    try {
        const result = await db.any("SELECT * FROM projects");
        return { result };
      } catch (error) {
        return { error };
      }
}


const getProject = async (id) => {
    try {
      const result = await db.any(`SELECT * FROM projects WHERE id=${id}`);
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const createProject = async (project) => {
    try {
      const result = await db.one(
        `INSERT INTO
          projects(name,  technology, module, description, revisit, repo_link)
         VALUES
          ($1, $2, $3, $4, $5, $6)
         RETURNING *;`,
        [project.name, project.technology, project.module, project.description, project.revisit, project.repo_link]
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const deleteProject = async (id) => {
    try {
      const result = await db.one(
        "DELETE FROM projects WHERE id=$1 RETURNING *",
        id
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

  const updateProject = async (id, project) => {
    try {
      const result = await db.one(
        `UPDATE projects SET name=$1, technology=$2, module=$3, description=$4, revisit=$5, repo_link=$6  WHERE id=$7 RETURNING *`,
        [project.name, project.technology, project.module, project.description, project.revisit, project.repo_link, id]
      );
      return { result };
    } catch (error) {
      return { error };
    }
  };

module.exports = {
    getAllProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
}