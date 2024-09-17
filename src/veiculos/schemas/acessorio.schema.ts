
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AcessorioDocument = Acessorio & Document;

@Schema()
export class Acessorio {
  @Prop({ required: true })
  nome: string;
    private _id: any;
}

export const AcessorioSchema = SchemaFactory.createForClass(Acessorio);
