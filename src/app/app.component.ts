import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Array<any> = [];
  constructor(private dataservices: DataService) { }
  title = "Purchase Bonus "
  ngOnInit() {
    this.dataservices.getPurchaseBonus().subscribe((responce: any) => {
      if (responce.length > 0) this.data = responce;
    });
  }
}
