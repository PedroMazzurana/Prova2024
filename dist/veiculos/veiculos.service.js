"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const veiculo_schema_1 = require("./schemas/veiculo.schema");
const acessorio_schema_1 = require("./schemas/acessorio.schema");
let VeiculosService = class VeiculosService {
    constructor(veiculoModel, acessorioModel) {
        this.veiculoModel = veiculoModel;
        this.acessorioModel = acessorioModel;
    }
    async create(createVeiculoDto) {
        const newVeiculo = new this.veiculoModel(createVeiculoDto);
        return newVeiculo.save();
    }
    async findAll() {
        return this.veiculoModel.find().populate('acessorios').exec();
    }
    async findOne(id) {
        return this.veiculoModel.findById(id).populate('acessorios').exec();
    }
    async update(id, updateVeiculoDto) {
        return this.veiculoModel.findByIdAndUpdate(id, updateVeiculoDto, { new: true }).exec();
    }
    async remove(id) {
        return this.veiculoModel.findByIdAndDelete(id).exec();
    }
    async addAcessorio(veiculoId, acessorioDto) {
        const acessorio = await this.acessorioModel.create(acessorioDto);
        const veiculo = await this.veiculoModel.findById(veiculoId).exec();
        if (!veiculo) {
            throw new Error('Veículo não encontrado');
        }
        veiculo.acessorios.push(acessorio._id);
        return veiculo.save();
    }
    async removeAcessorio(veiculoId, acessorioId) {
        const veiculo = await this.veiculoModel.findById(veiculoId).exec();
        if (!veiculo) {
            throw new Error('Veículo não encontrado');
        }
        veiculo.acessorios = veiculo.acessorios.filter(ac => ac.toString() !== acessorioId);
        return veiculo.save();
    }
};
exports.VeiculosService = VeiculosService;
exports.VeiculosService = VeiculosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(veiculo_schema_1.Veiculo.name)),
    __param(1, (0, mongoose_1.InjectModel)(acessorio_schema_1.Acessorio.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], VeiculosService);
//# sourceMappingURL=veiculos.service.js.map