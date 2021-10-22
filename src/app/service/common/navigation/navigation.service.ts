import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private readonly router: Router) { }

  navigate(url:string){
    this.router.navigate([url])
    .then(u => console.log('#NAV => '+this.router.url))
    .catch(err => console.log('[ERROR] #NAV => '+err));
  }

  currentUrl():string{
    return this.router.url;
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
}
