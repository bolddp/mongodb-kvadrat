import { DemoDatabase } from './cmd';

/**
 * Let's add an additional account manager to ACME Inc, it's an important client after all.
 */
export const s09 = async (db: DemoDatabase) => {
  await db.companies.updateOne(
    { _id: 'ID01' },
    {
      $push: {
        accountManagers: {
          name: 'Eccstra Manager',
          budget: 20,
        },
      },
    },
  );
};
