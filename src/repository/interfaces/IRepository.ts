export interface Repository {
  save(): void;
  update(): void;
  delete(): void;
  find(): any;
  findAll(): any[];
}