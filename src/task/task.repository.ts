import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTasks(): Promise<Task[]> {
    const query = this.createQueryBuilder('task');

    return await query.getMany();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { startTime, endTime, taskName } = createTaskDto;

    const task = new Task();
    task.startTime = startTime;
    task.endTime = endTime;
    task.taskName = taskName;

    await task.save();

    return task;
  }
}
