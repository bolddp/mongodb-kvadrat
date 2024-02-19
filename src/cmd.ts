import { Collection, Db, MongoClient, ServerApiVersion } from 'mongodb';
import { s01 } from './s01';
import { s02 } from './s02';
import { Company } from './models/company';
import { s03 } from './s03';
import { s04 } from './s04';
import { s05 } from './s05';
import { s06 } from './s06';
import { s07 } from './s07';
import { s08 } from './s08';
import { s09 } from './s09';
import { s10 } from './s10';
import { s11 } from './s11';
import { s12 } from './s12';
import { s13 } from './s13';

let client: MongoClient | undefined;

const getDatabase = async (): Promise<Db> => {
  if (!client) {
    client = new MongoClient('mongodb://localhost:27017', {
      serverApi: ServerApiVersion.v1,
    });
    await client.connect();
  }
  return client.db();
};

const closeDb = async () => {
  if (client) {
    await client.close();
    client = undefined;
  }
};

export interface DemoDatabase {
  companies: Collection<Company>;
}

export type DbStatement = (db: DemoDatabase) => Promise<any>;

const statements: { [key: string]: DbStatement } = {
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
  s08,
  s09,
  s10,
  s11,
  s12,
  s13,
};

export const logObject = (obj: any) => {
  console.log(`===================================================`);
  console.log(JSON.stringify(obj, undefined, 2));
  console.log(`===================================================`);
};

(async () => {
  const sId = process.argv[2];
  const statement = statements[sId];
  if (!statement) {
    console.log(`ERROR! Could not find statement ${sId}`);
  }

  const mongoDb = await getDatabase();
  try {
    await statement({
      companies: mongoDb.collection<Company>('companies'),
    });
  } catch (error: any) {
    console.log(`MongoDB reported error: ${error.message}`);
  } finally {
    await closeDb();
  }
})();
