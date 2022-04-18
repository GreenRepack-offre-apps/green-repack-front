

    export interface CurrentUser {
      profil: string | any;
      sessionActive: boolean;
      email: string | any;
      token: string | any;
      uid: any;
    }

    export type ProfilsType = 'USER'|'CLIENT'|'MARCHAND'|'ASSOCIATION'|'GESTION';


    export interface Profils {
      type:ProfilsType;
    }
    export class UserProfils implements Profils {
      readonly type: ProfilsType = 'USER';
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
