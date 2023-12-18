export interface NewUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface PersistedUserDTO extends NewUserDTO {
  id: string;
}