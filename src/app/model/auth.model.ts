

    export interface CurrentUser {
      profil: string | Profils;
      sessionActive: boolean;
      email: string | any;
      token: string | any;
      uid: any;
    }

    export type ProfilsType = 'CLIENT'|'MARCHAND'|'ASSOCIATION'|'GESTION';


    export interface Profils {
      type:ProfilsType;
    }
    export class MarchandProfils implements Profils {
      readonly type: ProfilsType = 'MARCHAND';
    }
    export class ClientProfils implements Profils{
      readonly type:ProfilsType = 'CLIENT';
    }
    export class AssociationProfils implements Profils{
      readonly type:ProfilsType = 'ASSOCIATION';
    }
    export class AdminProfils implements Profils {
      readonly type:ProfilsType = 'GESTION';
    }
