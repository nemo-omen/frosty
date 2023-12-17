import { ISource } from './ISource';
import { IAnnotation } from './IAnnotation';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  subscriptions: ISource[];
  annotations: IAnnotation[];
}