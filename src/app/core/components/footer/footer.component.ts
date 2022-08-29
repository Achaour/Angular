import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version!:number

  constructor( private versionService:VersionService) {


versionService.subj.subscribe(data=> {this.version=data
  console.log(data,'observable')});

   }

  ngOnInit(): void {
  }

}
