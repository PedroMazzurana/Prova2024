import { CreateAcessorioDto } from './create-acessorio.dto';
export declare class CreateVeiculoDto {
    modelo: string;
    anoFabricacao: number;
    placa: string;
    acessorios: CreateAcessorioDto[];
}
