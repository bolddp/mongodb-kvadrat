import { DemoDatabase, logObject } from './cmd';

/**
 * There has been rumors about some account managers
 * having too small budgets.
 * Let's check which companies have account managers
 * with a budget below 30.
 */
export const s11 = async (db: DemoDatabase) => {
  const rsp = await db.companies
    .find({
      'accountManagers.budget': { $lt: 30 },
    })
    .toArray();
  logObject(rsp);
};
