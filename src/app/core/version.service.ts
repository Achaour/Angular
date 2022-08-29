import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {



  // creer un observable

  // créer un nouvel Observable
subj=new BehaviorSubject(0);

  // creer une methode



  // this.data.next(this.data.value +1)

  constructor() {


   }

   increment(){

    this.subj.next(this.subj.value+1)
    }






  }



