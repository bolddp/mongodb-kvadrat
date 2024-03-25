import { DemoDatabase } from './cmd';

/**
 * All companies should have an account manager now!
 * Since it's the first time we add account managers,
 * we can just set the array. As before, the rest of
 * the document remains unchanged. Some data, like
 * the name, is duplicated to avoid having to do
 * joins when displaying the document.
 */
export const s08b = async (db: DemoDatabase) => {
  await db.companies.updateMany(
    {},
    {
      $set: {
        accountManagers: [
          {
            employeeId: 'EM01',
            name: 'Robert Ringer',
            budget: 50,
          },
        ],
      },
    },
  );
};
