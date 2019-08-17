import uuid from 'uuid';
import md5 from 'md5';

import { connectDB } from './connect-db';

const authenticationTokens = [];

async function assembleUserState(user) {
    let db = await connectDB();

    let tasks = await db.collection('tasks').find({ owner: user.id }).toArray();
    let groups = await db.collection('groups').find({ owner: user.id }).toArray();

    return {
        tasks,
        groups,
        session: {
            authenticated: 'AUTHENTICATED',
            id: user.id
        }
    }
}

//app in the argument is also referred to as the server
export const authenticationRoute = app => {
    app.post('/authenticate', async (req, res) => {
        const { username, password } = req.body;

        //Connect to the database and verify this information relative to the information we already have
        let db = await connectDB();
        let collection = db.collection('users');

        let user = await collection.findOne({ name: username });

        if (!user) {
            return res.status(500).send("User not found");
        };

        let hash = md5(password);
        let passwordCorrect = hash === user.passwordHash;

        if (!passwordCorrect) {
            return res.status(500).send("Password incorrect");
        }

        //Create authorization token once we've gotten this far
        //Currently not used, but will be required if you want to add more security later
        let token = uuid();

        authenticationTokens.push({
            token,
            userId: user.id
        });

        let state = await assembleUserState(user);

        res.send({ token, state });

    });
}
