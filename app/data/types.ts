import { Database } from '@sean-nicholas/nedb-database';
import {
    Session,
    Pomo,
} from '../models/types';

export interface AppDatabases {
    sessionDb: Database<Session>,
    pomoDb: Database<Pomo>,
}