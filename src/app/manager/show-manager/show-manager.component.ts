import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-show-manager',
  templateUrl: './show-manager.component.html',
  styleUrls: ['./show-manager.component.css']
})
export class ShowManagerComponent implements OnInit {
  manager: any;
  id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private managerService: ManagerService) {
      this.id = "";
    }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.id = params.get('id');
      });

    this.getSeller(this.id);
  }

  getSeller(id) {
    this.managerService.getOne(id)
      .subscribe(
        (newManager: any) => {
          this.manager = newManager;
      });
  }

}
