import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VeiculosService } from './veiculos.service';
import { VeiculosController } from './veiculos.controller';
import { Veiculo, VeiculoSchema } from './schemas/veiculo.schema';
import { Acessorio, AcessorioSchema } from './schemas/acessorio.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Veiculo.name, schema: VeiculoSchema }, { name: Acessorio.name, schema: AcessorioSchema }]),
  ],
  controllers: [VeiculosController],
  providers: [VeiculosService],
})
export class VeiculosModule {}
