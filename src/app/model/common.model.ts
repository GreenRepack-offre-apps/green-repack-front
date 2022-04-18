

export type StatusMsg = 'SUCCES' | 'ECHEC' | 'EXIST';

export type ProfilUser = 'MARCHAND' | 'CLIENT';

export type UsersAttrib = "email" | "nom" | "idmar" | "adresse";


export interface Status {
  status: StatusMsg | string;
}
export interface DataResult<T> {
  status: StatusMsg;
  data?: T | any;
}

export interface AuthPayload {
  readonly username: string;
  readonly password: string;
}
