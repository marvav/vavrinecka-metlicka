import mariadb from 'mariadb';
const pool = mariadb.createConnection("md418.wedos.net");

export async function getBanner(): Promise<string> {
    try {
        const conn = (await pool);
        return await conn.query("SELECT * from banner_table where id = ?", [1]);

    } finally {
    }
}