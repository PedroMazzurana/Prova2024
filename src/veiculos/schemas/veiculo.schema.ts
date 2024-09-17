import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Acessorio } from './acessorio.schema';

export type VeiculoDocument = Veiculo & Document;

@Schema()
export class Veiculo {
  @Prop({ required: true })
  modelo: string;

  @Prop({ required: true })
  anoFabricacao: number;

  @Prop({ required: true, unique: true })
  placa: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Acessorio' }] })
  acessorios: Acessorio[];
}

export const VeiculoSchema = SchemaFactory.createForClass(Veiculo);
