import { DemoDatabase } from './cmd';

/**
 * Insert a company, setting _id ourselves
 */
export const s04 = async (db: DemoDatabase) => {
  await db.companies.insertOne({
    _id: 'ID01',
    name: 'ACME Inc.',
    address: {
      street: 'Little way',
      zipCode: '12345',
      city: 'New York',
    },
  });
};
