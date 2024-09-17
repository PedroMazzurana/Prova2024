import { CreateAcessorioDto } from './create-acessorio.dto';

export class CreateVeiculoDto {
  modelo: string;
  anoFabricacao: number;
  placa: string;
  acessorios: CreateAcessorioDto[];
}
