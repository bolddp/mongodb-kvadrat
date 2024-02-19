import { DemoDatabase } from './cmd';

/**
 * Let's insert a few more companies with one server call.
 */
export const s05 = async (db: DemoDatabase) => {
  await db.companies.insertMany([
    {
      _id: 'ID02',
      name: 'Better butter Inc.',
      address: {
        street: 'Have it my Avenue',
        zipCode: '12233',
        city: 'New York',
      },
    },
    {
      _id: 'ID03',
      name: 'Harrys Horses Ltd.',
      contacts: [
        {
          name: 'Ben Wilson',
          phoneNumber: '123-112233',
        },
      ],
    },
  ]);
};
