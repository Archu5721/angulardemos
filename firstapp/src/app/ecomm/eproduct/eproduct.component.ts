import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-eproduct',
  templateUrl: './eproduct.component.html',
  styleUrls: ['./eproduct.component.css']
})
export class EproductComponent implements OnInit {
  @Input()
  productElement: {
    name: string;
    quantity: number;
    status: string;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
