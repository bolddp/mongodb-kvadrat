import { DemoDatabase, logObject } from './cmd';

/**
 * We don't need the entire company data for this, let's just return the
 * company id and all the account managers for the company.
 */
export const s12 = async (db: DemoDatabase) => {
  const rsp = await db.companies
    .find(
      {
        'accountManagers.budget': { $lt: 30 },
      },
      {
        projection: { accountManagers: 1 },
      },
    )
    .toArray();
  logObject(rsp);
};
