import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { CreateAcessorioDto } from './dto/create-acessorio.dto';

@Controller('veiculos')
export class VeiculosController {
  constructor(private readonly veiculosService: VeiculosService) {}

  @Post()
  create(@Body() createVeiculoDto: CreateVeiculoDto) {
    return this.veiculosService.create(createVeiculoDto);
  }

  @Get()
  findAll() {
    return this.veiculosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.veiculosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVeiculoDto: any) {
    return this.veiculosService.update(id, updateVeiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.veiculosService.remove(id);
  }

  @Post(':id/acessorios')
  addAcessorio(@Param('id') id: string, @Body() acessorioDto: CreateAcessorioDto) {
    return this.veiculosService.addAcessorio(id, acessorioDto);
  }

  @Delete(':id/acessorios/:acessorioId')
  removeAcessorio(@Param('id') id: string, @Param('acessorioId') acessorioId: string) {
    return this.veiculosService.removeAcessorio(id, acessorioId);
  }
}
