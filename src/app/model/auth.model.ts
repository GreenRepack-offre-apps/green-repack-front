

    export interface SessionUser<T> {
      profil: string | Profils;
      user: T;
      token?: string;
    }

    export type Profils = 'CLIENT'|'MARCHAND'|'ADMIN';
