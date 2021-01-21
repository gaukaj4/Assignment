import { Component, OnInit } from '@angular/core';
import { usersService } from '../users.service';
import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class usersComponent implements OnInit {
  users:Users[]=[];
  p:number=1;
  
  constructor(public rs:usersService) { }
  

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    })
  }

  
  
}
