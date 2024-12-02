import { Injectable } from '@nestjs/common';
import { CreateKidDto } from './dto/create-kid.dto';
import { UpdateKidDto } from './dto/update-kid.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class KidService {
  db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }
  
  create(createKidDto: CreateKidDto) {
    return this.db.kid.create({
      data: createKidDto
    });
  }

  findAll() {
    return this.db.kid.findMany();
  }

  addToyToChild(kidid: number, toyid: number){
    return this.db.kid.update({
      where: {id: kidid},
      data: {toys: {connect: {id: toyid}}}
    })
  }

  takeToyfromChild(kidid: number, toyid: number){
    return this.db.kid.update({
      where: {id: kidid},
      data: {toys: {disconnect: {id: toyid}}}
    })
  }

  findOne(id: number) {
    return this.db.kid.findUnique({
      where: {
        id
      }, include: {toys: true}
    });
  }

  update(id: number, updateKidDto: UpdateKidDto) {
    return this.db.kid.update({
      where: {id},
      data: updateKidDto
    });
  }

  remove(id: number) {
    return this.db.kid.delete({
      where: {
        id
      }
    });
  }
}
