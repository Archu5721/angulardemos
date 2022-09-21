import { Component, Input, OnInit  } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  @Input()
  account: {
    name: string;
    status: string;
  };

  @Input()
  id: number = 0;

  changeStatus(newstatus: string) {
    this.accountService.updateStatus(this.id, newstatus);
  }

  deleteAccount(){
    this.accountService.deleteAccount(this.id);
  }
}
