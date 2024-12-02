import { IsNotEmpty, IsString } from "class-validator"

export class CreateKidDto {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsNotEmpty()
    adress: string
    @IsString()
    @IsNotEmpty()
    statisfied: boolean
}
