import { IsNotEmpty, IsString } from "class-validator"

export class CreateToyDto {
    @IsString()
    @IsNotEmpty()
    name: String
    @IsString()
    @IsNotEmpty()
    material: String
    @IsString()
    @IsNotEmpty()
    weight: number 
}
