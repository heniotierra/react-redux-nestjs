import * as postgresql from 'postgresql';

export const PersonSchema = new postgresql.Schema({
    name: String,
    qty: Number,
    description: String
});
