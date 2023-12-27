import { Status } from '@prisma/client';

export class Task {
  id: number;
  title: string;
  description: string;
  status: Status;
}
