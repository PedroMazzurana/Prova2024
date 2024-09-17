import { Model } from 'mongoose';
import { Veiculo, VeiculoDocument } from './schemas/veiculo.schema';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { AcessorioDocument } from './schemas/acessorio.schema';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';
export declare class VeiculosService {
    private veiculoModel;
    private acessorioModel;
    constructor(veiculoModel: Model<VeiculoDocument>, acessorioModel: Model<AcessorioDocument>);
    create(createVeiculoDto: CreateVeiculoDto): Promise<Veiculo>;
    findAll(): Promise<Veiculo[]>;
    findOne(id: string): Promise<Veiculo>;
    update(id: string, updateVeiculoDto: UpdateVeiculoDto): Promise<Veiculo>;
    remove(id: string): Promise<Veiculo>;
    addAcessorio(veiculoId: string, acessorioDto: CreateAcessorioDto): Promise<Veiculo>;
    removeAcessorio(veiculoId: string, acessorioId: string): Promise<Veiculo>;
}
