export class TodoDto {
  id?: string;
  title: string;
  status: 'todo' | 'done' | 'in progress';
}
