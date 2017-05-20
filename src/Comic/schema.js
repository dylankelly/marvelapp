/**
 * Schema
 */
import { schema } from 'normalizr';


export const comicsSchema = new schema.Entity('comics', {}, { idAttribute: 'id' });

export default comicsSchema;