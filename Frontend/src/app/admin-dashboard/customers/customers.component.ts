import { inject, Component } from '@angular/core';
import { APIService } from '../../service/api-service.service';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  userservice = inject(APIService);
  userlist: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.userList();
  }

  userList() {
    this.userservice.get_userList().subscribe((data: any) => {
      this.userlist = data;
    });
  }

  // onDelete(userid: any) {
  //   // const isdel = confirm("Are you sure you want to delete it?");
  //   // if (isdel) {
  //   //   this.userservice.delete_user(userid).subscribe((data: any) => {
  //   //     alert("Deleted successfully");
  //   //     this.userList(); // Refresh user list after deletion
  //   //   });
  //   // } else {
  //   //   alert("Deletion canceled");
  //   // }

  //   this.userservice.delete_user(userid).subscribe((data: any) => {
  //     alert('Deleted successfully');
  //     this.userList(); // Refresh user list after deletion
  //   });
  // }

  onDelete(userid: any) {
    debugger;
    this.userservice.delete_user(userid).subscribe(
      (data: any) => {
        alert('Deleted successfully');
        this.userList(); // Refresh user list after deletion
        this.router.navigateByUrl('/app-customers');
      },
      (error: any) => {
        console.error('Error deleting user:', error);
        alert('Failed to delete user. Please try again.');
      }
    );
  }
  Admin() {
    this.router.navigateByUrl('app-admin-dashboard');
  }

  Notifications() {
    this.router.navigateByUrl('app-notifications');
  }

  Products() {
    this.router.navigateByUrl('app-admin-crud');
  }

  Sales() {
    this.router.navigateByUrl('app-sales');
  }

  Users() {
    this.router.navigateByUrl('app-customers');
  }

  toggleSidebar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;

    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  }
}
