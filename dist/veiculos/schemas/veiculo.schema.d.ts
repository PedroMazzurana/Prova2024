import { Document, Types } from 'mongoose';
import { Acessorio } from './acessorio.schema';
export type VeiculoDocument = Veiculo & Document;
export declare class Veiculo {
    modelo: string;
    anoFabricacao: number;
    placa: string;
    acessorios: Acessorio[];
}
export declare const VeiculoSchema: import("mongoose").Schema<Veiculo, import("mongoose").Model<Veiculo, any, any, any, Document<unknown, any, Veiculo> & Veiculo & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Veiculo, Document<unknown, {}, import("mongoose").FlatRecord<Veiculo>> & import("mongoose").FlatRecord<Veiculo> & {
    _id: Types.ObjectId;
}>;
