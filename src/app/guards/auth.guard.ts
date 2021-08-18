import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  users = {
    role:'admin'
  }
  constructor(private _userService : UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let  flag = this._userService.isAdminRights();
    if (flag==true)
    return flag;
    else 
    return (window.alert("You are not allowed to access this link"));
    
    // if(route.data[0]== this.users.role)
    // return true;
    // else
    // return false;
  }
  
}
