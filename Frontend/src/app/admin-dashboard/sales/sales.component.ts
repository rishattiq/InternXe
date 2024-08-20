import { inject, Component } from '@angular/core';
import { APIService } from '../../service/api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {


  
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


}
