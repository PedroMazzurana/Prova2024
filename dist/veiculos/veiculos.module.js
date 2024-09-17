"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const veiculos_service_1 = require("./veiculos.service");
const veiculos_controller_1 = require("./veiculos.controller");
const veiculo_schema_1 = require("./schemas/veiculo.schema");
const acessorio_schema_1 = require("./schemas/acessorio.schema");
let VeiculosModule = class VeiculosModule {
};
exports.VeiculosModule = VeiculosModule;
exports.VeiculosModule = VeiculosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: veiculo_schema_1.Veiculo.name, schema: veiculo_schema_1.VeiculoSchema }, { name: acessorio_schema_1.Acessorio.name, schema: acessorio_schema_1.AcessorioSchema }]),
        ],
        controllers: [veiculos_controller_1.VeiculosController],
        providers: [veiculos_service_1.VeiculosService],
    })
], VeiculosModule);
//# sourceMappingURL=veiculos.module.js.map