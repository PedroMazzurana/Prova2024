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
exports.VeiculosController = void 0;
const common_1 = require("@nestjs/common");
const veiculos_service_1 = require("./veiculos.service");
const create_veiculo_dto_1 = require("./dto/create-veiculo.dto");
const create_acessorio_dto_1 = require("./dto/create-acessorio.dto");
let VeiculosController = class VeiculosController {
    constructor(veiculosService) {
        this.veiculosService = veiculosService;
    }
    create(createVeiculoDto) {
        return this.veiculosService.create(createVeiculoDto);
    }
    findAll() {
        return this.veiculosService.findAll();
    }
    findOne(id) {
        return this.veiculosService.findOne(id);
    }
    update(id, updateVeiculoDto) {
        return this.veiculosService.update(id, updateVeiculoDto);
    }
    remove(id) {
        return this.veiculosService.remove(id);
    }
    addAcessorio(id, acessorioDto) {
        return this.veiculosService.addAcessorio(id, acessorioDto);
    }
    removeAcessorio(id, acessorioId) {
        return this.veiculosService.removeAcessorio(id, acessorioId);
    }
};
exports.VeiculosController = VeiculosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_veiculo_dto_1.CreateVeiculoDto]),
    __metadata("design:returntype", void 0)
], VeiculosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VeiculosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VeiculosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], VeiculosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VeiculosController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/acessorios'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_acessorio_dto_1.CreateAcessorioDto]),
    __metadata("design:returntype", void 0)
], VeiculosController.prototype, "addAcessorio", null);
__decorate([
    (0, common_1.Delete)(':id/acessorios/:acessorioId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('acessorioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], VeiculosController.prototype, "removeAcessorio", null);
exports.VeiculosController = VeiculosController = __decorate([
    (0, common_1.Controller)('veiculos'),
    __metadata("design:paramtypes", [veiculos_service_1.VeiculosService])
], VeiculosController);
//# sourceMappingURL=veiculos.controller.js.map