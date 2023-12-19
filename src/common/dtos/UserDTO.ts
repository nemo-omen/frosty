import { IUser } from "../../model/interfaces";

export type UserRequestDTO = Pick<IUser, "name" | "email" | "password">;
export type UserResponseDTO = Pick<IUser, "id" | "name" | "email">;
export type UserPersistDTO = UserRequestDTO & { id: string; };
