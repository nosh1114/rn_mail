import { Kysely, PostgresDialect, CamelCasePlugin } from 'kysely';
import pkg from 'pg';
import type { DB } from './types';
import { DIRECT_URL as connectionString } from '$env/static/private';

const { Pool } = pkg;

if (!connectionString) {
  throw new Error('データベースの接続文字列が設定されていません。');
}

export const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({ pool }),
  plugins: [new CamelCasePlugin()]
});

export type Database = typeof db;
