import { DemoDatabase } from './cmd';

/**
 * Insert another company with the same companyId. Unintentionally succeeds
 * since the database assigns id's
 */
export const s02 = async (db: DemoDatabase) => {
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
