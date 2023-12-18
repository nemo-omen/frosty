export interface NewUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface ReturnUserDTO {
  id: string;
  name: string;
  email: string;
}

export interface PersistedUserDTO extends NewUserDTO {
  id: string;
}