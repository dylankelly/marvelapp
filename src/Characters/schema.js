/**
 * Schema
 */
import { schema } from 'normalizr';


export const charactersSchema = new schema.Entity('characters', {}, { idAttribute: 'id' });

export default charactersSchema;