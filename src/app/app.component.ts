import { Component, } from '@angular/core';
import { MasterService } from './master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';

  constructor(private service:MasterService) {}
  master:any=[];
  ngOnInit(){
    this.service.getData().subscribe(data => this.master=data);
  };
 
}
