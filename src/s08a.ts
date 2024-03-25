import { DemoDatabase } from './cmd';

/**
 * Let's introduce account managers, employees at our
 * company that handle customer relations. That
 * warrants its own collection, let's call it
 * 'employees'.
 */
export const s08a = async (db: DemoDatabase) => {
  await db.employees.insertMany([
    {
      _id: 'EM01',
      name: 'Robert Ringer',
      salary: 4000,
    },
  ]);
};
