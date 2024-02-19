import { DemoDatabase, logObject } from './cmd';

/**
 * Robert Zinger never forgave us for spelling his name wrong, so he quit.
 * We need to remove him as account manager.
 */
export const s13 = async (db: DemoDatabase) => {
  await db.companies.updateMany(
    { 'accountManagers.name': 'Robert Zinger' },
    {
      $pull: {
        accountManagers: {
          name: 'Robert Zinger',
        },
      },
    },
  );
};
