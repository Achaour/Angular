import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

data!:any;
  constructor(

    private versionService:VersionService
  ) {

//versionService.subj.subscribe(data=> console.log(data,'observable'));

  }
  ngOnInit(): void {


  }
  onAdd(){
    this.versionService.increment();
  }
}
