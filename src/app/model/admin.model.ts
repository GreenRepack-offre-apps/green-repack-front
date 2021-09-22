import { environment } from "src/environments/environment";

const ADMIN_PATTERN_MAIL = environment.admin_mail;

export function adminMailEquals(s: string) {
 return s === ADMIN_PATTERN_MAIL || s.includes(ADMIN_PATTERN_MAIL);
}

export interface Admin {
  nom: any;
  email: any;
}
