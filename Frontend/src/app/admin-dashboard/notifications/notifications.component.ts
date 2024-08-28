import { Component, inject } from '@angular/core';
import { APIService } from '../../service/api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent {
  userservice = inject(APIService);
  messages: any[] = [];
  statusList: string[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.Complaints();
  }

  Complaints() {
    this.userservice.get_complaints().subscribe((data: any) => {
      this.messages = data;
      console.log(data);
      // this.statusList = this.messages.map(() => 'Pending');
    });
  }

  apiUrl = 'http://localhost:5292/api/Contact/updatemessage'; // Replace with your actual API endpoint

  changeStatus(index: number) {
    const confirmChange = confirm(
      'Are you sure you want to change the status?'
    );
    if (confirmChange) {
      const updatedStatus = 'Completed';
      const contactId = this.messages[index].id; // Make sure 'id' is available in your data model

      console.log(contactId);

      // Send the update to the backend as a plain string
      this.http
        .put(`${this.apiUrl}/${contactId}`, `"${updatedStatus}"`, {
          headers: { 'Content-Type': 'application/json' }, // Ensure JSON content type
        })
        .subscribe(
          (response) => {
            console.log('Status changed successfully', response);
            this.messages[index].status = updatedStatus; // Update local status after successful change
          },
          (error) => {
            console.error('Failed to change status', error);
            alert('Failed to change status');
          }
        );
    } else {
      alert('Status change canceled');
    }
  }

  resetform() {}

  onDelete(userid: any) {
    const isdel = confirm('Are you sure you want to delete it?');
    if (isdel) {
      this.userservice.delete_user(userid).subscribe(() => {
        alert('Deleted successfully');
        this.Complaints(); // Refresh user list after deletion
      });
    } else {
      alert('Deletion canceled');
    }
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
