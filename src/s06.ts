import { DemoDatabase } from './cmd';

/**
 * We forgot to add an address to Harrys Horses,
 * let's fix that with an update.
 * It consists of a filter and an update instruction.
 * The rest of the document is left untouched.
 */
export const s06 = async (db: DemoDatabase) => {
  await db.companies.updateOne(
    { _id: 'ID03' },
    {
      $set: {
        address: {
          street: 'Washington Avenue',
          zipCode: '88888',
          city: 'Boston',
        },
      },
    },
  );
};
