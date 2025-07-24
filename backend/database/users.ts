import db from "../db.ts"

// Create a new user
const create = (username: String, password: String) => {
    return db.one(
        "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id",
        [username, password]
    );
}

export default {
    create
};