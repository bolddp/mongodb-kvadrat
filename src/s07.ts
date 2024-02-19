import { DemoDatabase } from './cmd';

/**
 * Let's also add another contact to the company.
 */
export const s07 = async (db: DemoDatabase) => {
  await db.companies.updateOne(
    { _id: 'ID03' },
    {
      $push: {
        contacts: {
          name: 'Newie Contactorovic',
          phoneNumber: '123-123123',
        },
      },
    },
  );
};
