import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  version!:number

  constructor(private versionService:VersionService ) {

    versionService.subj.subscribe(data=> {this.version=data
      console.log(data,'observable')});

  }

  ngOnInit(): void {
  }

}
