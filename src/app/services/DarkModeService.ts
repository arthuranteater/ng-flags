import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DarkModeService {

 public isDark: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor() { }

 }