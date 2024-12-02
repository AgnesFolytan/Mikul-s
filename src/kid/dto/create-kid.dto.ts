import { IsNotEmpty, IsString } from "class-validator"

export class CreateKidDto {
    @IsString()
    @IsNotEmpty()
    name: String
    @IsString()
    @IsNotEmpty()
    adress: String
    @IsString()
    @IsNotEmpty()
    satisfied: Boolean
}
