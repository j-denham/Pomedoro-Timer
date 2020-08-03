import { Database, } from '@sean-nicholas/nedb-database';
import { AppDatabases, } from './types';
import { 
    Pomo,
    Session,
} from '../models/types';

const dbsPath = './';

const dbs: AppDatabases = {
    sessionDb: new Database<Session>({ 
        filename: `${dbsPath}pomos.db`, 
    }),
    pomoDb: new Database<Pomo>({ 
        filename: `${dbsPath}sessions.db`, 
    }),
};

dbs.sessionDb.init([
  {
    query: { _id: 'myConfig' },
    value: {},
  }
])
dbs.pomoDb.init([
  {
    query: { _id: 'myConfig' },
    value: {},
  }
])

export default dbs;
