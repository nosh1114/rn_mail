import { db } from '$lib/server/database';

export async function load(params) {
    
    const professor = await db
            .selectFrom('professor')
            .where('professor.id','=', params.params.professor)
            .innerJoin('department', 'department.id', 'professor.departmentId')
            .select(
              [
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
            .executeTakeFirstOrThrow();

            console.log(professor);
            return {
              professor
            };
          }

    