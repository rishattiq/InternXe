import { inject, Component } from '@angular/core';
import { APIService } from '../../service/api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {


  
  userservice = inject(APIService);
  userlist: any[] = [];

  constructor(private router:Router) {}

  ngOnInit() {
    this.userList();
  }

  userList() {
    this.userservice.get_userList().subscribe((data: any) => {
      this.userlist = data;
    });
  }
  Admin(){
    this.router.navigateByUrl('app-admin-dashboard')
  }

  Notifications(){
    this.router.navigateByUrl('app-notifications')
  }

  Products(){
    this.router.navigateByUrl('app-admin-crud')
  }
 
  Sales(){
    this.router.navigateByUrl('app-sales')
  }

  Users(){
    this.router.navigateByUrl('app-customers')
  }

  

  toggleSidebar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;

    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

}
