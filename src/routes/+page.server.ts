import { db } from '$lib/server/database';

export async function load() {
    const professors = await db
      .selectFrom('professor')
      .innerJoin('department', 'department.id', 'professor.departmentId')
      .select([
        'professor.id',
        'professor.name',
        'professor.email',
        'professor.profilePictureUrl',
        'professor.labUrl',
        'professor.labName',
        'professor.labPlace',
        'department.abbreviationName as department'
      ]
      )
      .execute();

    return {
      professors
    };
  
};