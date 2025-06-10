import mysql from 'mysql2/promise';

// Database connection configuration
const dbConfig = {
    host: process.env.TIDB_HOST,
    port: parseInt(process.env.TIDB_PORT || '4000'),
    user: process.env.TIDB_USER,
    password: process.env.TIDB_PASSWORD,
    database: process.env.TIDB_DATABASE,
    ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true
    }
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Helper function to execute queries
export async function query(sql: string, params?: any[]) {
    try {
        const [rows] = await pool.execute(sql, params);
        return rows;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}

// Type definitions
export interface User {
    id: number;
    name: string;
    group_id: number;
}

export interface Group {
    id: number;
    name: string;
}

export interface UserWithGroup extends User {
    group_name: string;
}
