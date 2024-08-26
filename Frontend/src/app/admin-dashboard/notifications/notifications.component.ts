// import { Component, inject } from '@angular/core';
// import { APIService } from '../../service/api-service.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-notifications',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './notifications.component.html',
//   styleUrls: ['./notifications.component.css']
// })
// export class NotificationsComponent {
//   userservice = inject(APIService);
//   userlist: any[] = [];
  
//   constructor() {}

//   ngOnInit() {
//     this.userList();
//   }

//   userList() {
//     this.userservice.get_userList().subscribe((data: any) => {
//       this.userlist = data;
//     });
//   }

//   changeStatus(item: any) {
//     const confirmChange = confirm("Are you sure you want to change the status?");
//     if (confirmChange) {
//       item.status = 'Completed';
//     } else {
//       alert('Status change canceled');
//     }
//   }

//   onDelete(userid: any) {
//     const isdel = confirm("Are you sure you want to delete it?");
//     if (isdel) {
//       this.userservice.delete_user(userid).subscribe(() => {
//         alert("Deleted successfully");
//         this.userList(); // Refresh user list after deletion
//       });
//     } else {
//       alert("Deletion canceled");
//     }
//   }
// }

import { Component, inject } from '@angular/core';
import { APIService } from '../../service/api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  userservice = inject(APIService);
  messages: any[] = [];
  statusList: string[] = []; 
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.Complaints();
  }

  Complaints() {
    this.userservice.get_complaints().subscribe((data: any) => {
      this.messages = data;
      console.log(data)
      this.statusList = this.messages.map(() => 'Pending'); 
    });
  }

  changeStatus(index: number) {
    const confirmChange = confirm("Are you sure you want to change the status?");
    if (confirmChange) {
      this.statusList[index] = 'Completed';
    } else {
      alert('Status change canceled');
    }
  }

  onDelete(userid: any) {
    const isdel = confirm("Are you sure you want to delete it?");
    if (isdel) {
      this.userservice.delete_user(userid).subscribe(() => {
        alert("Deleted successfully");
        this.Complaints(); // Refresh user list after deletion
      });
    } else {
      alert("Deletion canceled");
    }
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

