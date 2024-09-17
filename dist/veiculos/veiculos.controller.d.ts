import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
export declare class VeiculosController {
    private readonly veiculosService;
    constructor(veiculosService: VeiculosService);
    create(createVeiculoDto: CreateVeiculoDto): Promise<import("./schemas/veiculo.schema").Veiculo>;
    findAll(): Promise<import("./schemas/veiculo.schema").Veiculo[]>;
    findOne(id: string): Promise<import("./schemas/veiculo.schema").Veiculo>;
    update(id: string, updateVeiculoDto: any): Promise<import("./schemas/veiculo.schema").Veiculo>;
    remove(id: string): Promise<import("./schemas/veiculo.schema").Veiculo>;
    addAcessorio(id: string, acessorioDto: CreateAcessorioDto): Promise<import("./schemas/veiculo.schema").Veiculo>;
    removeAcessorio(id: string, acessorioId: string): Promise<import("./schemas/veiculo.schema").Veiculo>;
}
