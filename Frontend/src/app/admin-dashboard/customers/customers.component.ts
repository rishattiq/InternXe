import { inject, Component } from '@angular/core';
import { APIService } from '../../service/api-service.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RouterLink],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  userservice = inject(APIService);
  userlist: any[] = [];

  constructor() {}

  ngOnInit() {
    this.userList();
  }

  userList() {
    this.userservice.get_userList().subscribe((data: any) => {
      this.userlist = data;
    });
  }

  onDelete(userid: any) {
    const isdel = confirm("Are you sure you want to delete it?");
    if (isdel) {
      this.userservice.delete_user(userid).subscribe((data: any) => {
        alert("Deleted successfully");
        this.userList(); // Refresh user list after deletion
      });
    } else {
      alert("Deletion canceled");
    }
  }
}
