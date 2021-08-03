import { Marchand } from './marchand.model';

export type StatusMsg = 'SUCCES' | 'ECHEC';

export type ProfilUser = 'MARCHAND' | 'CLIENT';

export type MarchandAttrib = "email" | "nom" | "idmar" | "adresse";

export interface MarchandSearch {
  rechParam: MarchandAttrib;
  value: Marchand;
}
