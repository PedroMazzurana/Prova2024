import { CreateAcessorioDto } from './create-acessorio.dto';
export declare class UpdateVeiculoDto {
    modelo?: string;
    anoFabricacao?: number;
    placa?: string;
    acessorios?: CreateAcessorioDto[];
}
