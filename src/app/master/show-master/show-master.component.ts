import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MasterService } from './../master.service';

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

    this.getSeller(this.master_id);
  }

  getSeller(master_id) {
    this.masterService.getOne(master_id)
      .subscribe(
        (newMaster: any) => {
          this.master = newMaster;
      });
  }

}
