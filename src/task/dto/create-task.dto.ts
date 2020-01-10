import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  startTime: Date;

  @IsNotEmpty()
  endTime: Date;

  @IsNotEmpty()
  taskName: string;
}
