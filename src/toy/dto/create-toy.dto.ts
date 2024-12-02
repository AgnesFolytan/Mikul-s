import { IsEnum, IsIn, IsNotEmpty, IsNumber, IsString, Min } from "class-validator"

const materials = ['wood', 'metal', 'plastic', 'other'];
export class CreateToyDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @IsString()
    @IsIn(materials)
    material: string

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    weight: number 
}
