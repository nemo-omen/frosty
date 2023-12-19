import { IUser } from "../../model/interfaces";

export type NewUserDTO = Pick<IUser, "name" | "email" | "password">;
export type ReturnUserDTO = Pick<IUser, "id" | "name" | "email">;
export type PersistedUserDTO = NewUserDTO & { id: string; };

// export interface NewUserDTO {
//   name: string;
//   email: string;
//   password: string;
// }

// export interface ReturnUserDTO {
//   id: string;
//   name: string;
//   email: string;
// }

// export interface PersistedUserDTO extends NewUserDTO {
//   id: string;
// }