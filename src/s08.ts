import { DemoDatabase } from './cmd';

/**
 * Let's introduce account managers, colleagues of ours that handle customer
 * relations. At first, all companies have the same account manager, so
 * we update them all.
 *
 * NOTE! If we run this twice, we get 2 identical account managers on each company!
 */
export const s08 = async (db: DemoDatabase) => {
  await db.companies.updateMany(
    {},
    {
      $push: {
        accountManagers: {
          name: 'Robert Ringer',
          budget: 50,
        },
      },
    },
  );
};
