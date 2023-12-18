export interface Mapper<T> {
  toDomainModel(dto: any): T;
  toPersistDto(model: T): any;
  toReturnDto(model: T): any;
}