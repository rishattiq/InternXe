import { Component } from '@angular/core';
import { inject} from '@angular/core';
import { APIService } from '../../service/api-service.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  userservice = inject(APIService);

  userlist: any[] = [];
  
  onDelete(userid: any) {
    const isdel = confirm("Are you sure you want to delete it?");
    if (isdel) {
      this.userservice.delete_user(userid).subscribe((data: any) => {
        alert("Deleted successfully");
         // Refresh user list after deletion
      });
    } else {
      alert("Deletion canceled");
    }
  }

}
