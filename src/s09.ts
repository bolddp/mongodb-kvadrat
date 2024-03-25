import { DemoDatabase } from './cmd';

/**
 * Let's add an additional account manager to
 * ACME Inc, it's an important client after all.
 * A filter and a $push instruction is what it takes
 */
export const s09 = async (db: DemoDatabase) => {
  // First add it to the employees table, although this is not mandatory for the next
  // statement to work
  await db.employees.insertOne({
    _id: 'EM02',
    name: 'Eccstra Manager',
    salary: 3500,
  });

  await db.companies.updateOne(
    { _id: 'ID01' },
    {
      $push: {
        accountManagers: {
          employeeId: 'EM02',
          name: 'Eccstra Manager',
          budget: 20,
        },
      },
    },
  );
};
