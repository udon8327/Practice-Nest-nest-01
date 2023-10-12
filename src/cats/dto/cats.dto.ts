import { PartialType } from '@nestjs/mapped-types';

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class UpdateCatDto extends PartialType(CreateCatDto) {}
