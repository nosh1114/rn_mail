import { Kysely, PostgresDialect, CamelCasePlugin } from 'kysely';
import pkg from 'pg';
import type { DB } from './types';

const { Pool } = pkg;

const connectionString = import.meta.env.VITE_DIRECT_URL;

if (!connectionString) {
  throw new Error('データベースの接続文字列が設定されていません。');
}

export const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({ pool }),
  plugins: [new CamelCasePlugin()]
});

export type Database = typeof db;
