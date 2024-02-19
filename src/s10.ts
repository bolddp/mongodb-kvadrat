import { DemoDatabase } from './cmd';

/**
 * Robert Ringer has called, and he's not happy! He's the account manager for all the accounts,
 * alright, but his actual name is Zinger, not Ringer!
 */
export const s10 = async (db: DemoDatabase) => {
  await db.companies.updateMany(
    { 'accountManagers.name': 'Robert Ringer' },
    {
      $set: { 'accountManagers.$.name': 'Robert Zinger' },
    },
  );
};
