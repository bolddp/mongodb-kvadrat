import { DemoDatabase } from './cmd';

/**
 * Declare a filter, and MongoDB will delete all documents that match.
 */
export const s03 = async (db: DemoDatabase) => {
  const rsp = await db.companies.deleteMany({ companyId: 'ID01' });
};
