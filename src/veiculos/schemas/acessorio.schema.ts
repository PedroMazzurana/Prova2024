import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AcessorioDocument = Acessorio & Document;

@Schema()
export class Acessorio {
  @Prop({ required: true })
  nome: string;
}

export const AcessorioSchema = SchemaFactory.createForClass(Acessorio);
