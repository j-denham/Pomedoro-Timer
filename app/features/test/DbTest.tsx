import React, { useState, } from 'react';

import dbs from '../../data';
import { Pomo, } from '../../models/types';

interface DbTestProps {

}

const DbTest: React.FC<DbTestProps> = ({}) => {
        const testAddDb = async () => {
            console.log('inserting to db!');
            try {
            const res = await dbs.pomoDb.insert({});
            console.log('hello?');
            console.log('res', res);
            }
            catch (e) {
                console.log('e', e);
            }
        }
        const testQueryDb = async () => {
            const allPomos = await dbs.pomoDb.find({});
            console.log('allPomos', allPomos);

            setPomos(allPomos);
        }

    const [pomos, setPomos] = useState<Pomo[]>([]);

    return (
        <>
            <button onClick={testAddDb}> Test add to db</button>
            <button onClick={testQueryDb}> Test add to db</button>
            <div>
                <h2> QueryResults: </h2>
                <ul>
                    {
                        pomos.map(p => (
                            <li
                                key={p._id}
                            > 
                                {p?.toString()}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default DbTest