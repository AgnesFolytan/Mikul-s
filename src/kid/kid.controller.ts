import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { KidService } from './kid.service';
import { CreateKidDto } from './dto/create-kid.dto';
import { UpdateKidDto } from './dto/update-kid.dto';

@Controller('children')
export class KidController {
  constructor(private readonly kidService: KidService) {}

  @Post()
  create(@Body() createKidDto: CreateKidDto) {
    return this.kidService.create(createKidDto);
  }

  @Get()
  findAll() {
    return this.kidService.findAll();
  }

  @Put(':kidid/toys/:toyid')
  addToyToChild(@Param('kidid') kidid: string, @Param('toyid') toyid: string){
    return this.kidService.addToyToChild(+kidid, +toyid);
  }

  @Delete(':kidid/toys/:toyid')
  takeToyfromChild(@Param('kidid') kidid: string, @Param('toyid') toyid: string){
    return this.kidService.takeToyfromChild(+kidid, +toyid);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kidService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKidDto: UpdateKidDto) {
    return this.kidService.update(+id, updateKidDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kidService.remove(+id);
  }
}
