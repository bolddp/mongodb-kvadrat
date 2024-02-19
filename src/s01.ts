import { DemoDatabase } from './cmd';

/**
 * Insert a company, letting the database decide _id
 */
export const s01 = async (db: DemoDatabase) => {
  await db.companies.insertOne({
    companyId: 'ID01',
    name: 'ACME Inc.',
    address: {
      street: 'Little way',
      zipCode: '12345',
      city: 'New York',
    },
  });
};
