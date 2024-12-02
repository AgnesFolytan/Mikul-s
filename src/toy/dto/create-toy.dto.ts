import { IsNotEmpty, IsString } from "class-validator"

export class CreateToyDto {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsString()
    @IsNotEmpty()
    material: string
    @IsString()
    @IsNotEmpty()
    weight: number 
}
