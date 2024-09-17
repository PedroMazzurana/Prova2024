import { Document, Types } from 'mongoose';
export type AcessorioDocument = Acessorio & Document;
export declare class Acessorio {
    nome: string;
}
export declare const AcessorioSchema: import("mongoose").Schema<Acessorio, import("mongoose").Model<Acessorio, any, any, any, Document<unknown, any, Acessorio> & Acessorio & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Acessorio, Document<unknown, {}, import("mongoose").FlatRecord<Acessorio>> & import("mongoose").FlatRecord<Acessorio> & {
    _id: Types.ObjectId;
}>;
