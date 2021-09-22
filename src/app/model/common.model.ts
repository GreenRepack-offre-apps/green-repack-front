import { Marchand } from './marchand.model';

export type StatusMsg = 'SUCCES' | 'ECHEC' | 'EXIST';

export type ProfilUser = 'MARCHAND' | 'CLIENT';

export type MarchandAttrib = "email" | "nom" | "idmar" | "adresse";

export interface MarchandSearch {
  rechParam: MarchandAttrib;
  value: Marchand;
}

export interface DataResult<T> {
  status: StatusMsg;
  data: T;
}

