import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/master/master.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-show-master',
  templateUrl: './show-master.component.html',
  styleUrls: ['./show-master.component.css']
})
export class ShowMasterComponent implements OnInit {
  master: any;
  master_id: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private masterService: MasterService) {
      this.master_id = "";
    }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.master_id = params.get('master_id');
      });

    this.getMaster(this.master_id);
  }

  getMaster(master_id) {
    this.masterService.getOne(master_id)
      .subscribe(
        (newMaster: any) => {
          this.master = newMaster;
      });
  }

}
