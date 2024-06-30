import type { ColumnType } from 'kysely';

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Email = {
  id: Generated<number>;
  professorId: number;
  subject: string;
  body: string;
  sentAt: Generated<Timestamp>;
};

export type Professor = {
  id: Generated<number>;
  name: string;
  department: string;
  email: string;
  profilePictureUrl: string;
  researchAreas: string;
};

export type DB = {
  emails: Email;
  professors: Professor;
};
