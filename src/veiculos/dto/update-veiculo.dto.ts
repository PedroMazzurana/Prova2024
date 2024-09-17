import { CreateAcessorioDto } from "./create-acessorio.dto";

export class UpdateVeiculoDto {
    modelo: string;
    anoFabricacao: number;
    placa: string;
    acessorios: CreateAcessorioDto[];
}