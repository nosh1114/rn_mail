import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Department = {
    id: Generated<number>;
    name: string;
    abbreviationName: string;
};
export type Professor = {
    id: Generated<number>;
    name: string;
    email: string;
    profilePictureUrl: string;
    labUrl: string;
    labName: string;
    labPlace: string;
    departmentId: number;
};
export type DB = {
    department: Department;
    professor: Professor;
};
