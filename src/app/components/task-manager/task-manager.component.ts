import {Component, computed, effect, signal} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent {

  tasks = signal<Task[]>([
    { title: "Buy Milk", completed: false },
    { title: "Read a Book", completed: false },
  ])

  filter = signal(TaskFilter.ALL)
  filters = TaskFilter;

  filteredTasks = computed(() => {
    switch (this.filter()) {
      case TaskFilter.ALL:
        return this.tasks();
      case TaskFilter.ACTIVE:
        return this.tasks().filter(task => !task.completed);
      case TaskFilter.COMPLETED:
        return this.tasks().filter(task => task.completed);
    }
  })

  finishedTasksCount = computed(
    () => {
      return this.tasks()
        .filter(task => task.completed).length
    });

  completedEffect = effect(() => {
    const tasks = this.tasks();
    if (this.finishedTasksCount() === tasks.length && tasks.length > 0) {
      alert('All tasks have been completed');
    }
  })

  toggleTask(task: Task) {
    const updatedTasks = this.tasks()
      .map(taskItem =>
        taskItem.title === task.title ?
          { ...taskItem, completed: !task.completed }
          :
          taskItem
      );
    this.tasks.set(updatedTasks);
  }

  changeFilter(filter: TaskFilter) {
    this.filter.set(filter);
  }

  addTask(input: HTMLInputElement) {
    if (input.value) {
      const newTask: Task = {
        completed: false, title: input.value
      }
      this.tasks.set([...this.tasks(), newTask]);
    }
    input.value = "";
  }

}

export type Task = {
  completed: boolean
  title: string
}

export enum TaskFilter {
  ALL,
  ACTIVE,
  COMPLETED
}
