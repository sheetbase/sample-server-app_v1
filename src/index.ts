import { sheetbase } from '@sheetbase/server';

// create a server instance
export const Sheetbase = sheetbase();

// register a GET route to /
Sheetbase.Router.get('/', (req, res) => {
    return res.send('Hello, world!');
});

// register a POSt route to /
Sheetbase.Router.post('/', (req, res) => {
    return res.json({ hello: 'World!' });
});
