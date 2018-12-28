import { sheetbase } from '@sheetbase/core-server';

export const Sheetbase = sheetbase();

Sheetbase.Router.get('/', (req, res) => {
    return res.send('Hello, world!');
});

Sheetbase.Router.post('/', (req, res) => {
    return res.json({ hello: 'World!' });
});
