import { db } from '$lib/server/database';

export async function load() {
    const professors = await db
      .selectFrom('professors')
      .selectAll()
      .execute();

    return {
      professors
    };
  
};