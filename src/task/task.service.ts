import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
  ) {}

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.getTasks();
  }

  async getTaskById(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne(id);

    if (!task) {
      throw new NotFoundException('Task with ID "${id}" not found');
    }

    return task;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.createTask(createTaskDto);
  }

  // async updateTask();

  async deleteTaskById(id: number): Promise<void> {
    const deletedTask = await this.taskRepository.delete(id);

    if (!deletedTask.affected) {
      throw new NotFoundException('Task with ID "${id}" not found');
    }
  }
}
