import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

import { MatchService } from '../shared/match.service';
import { Match } from '../shared/match.model';

declare var M: any;

@Component({
  selector: 'app-year2011',
  templateUrl: './year2011.component.html',
  styleUrls: ['./year2011.component.css'],
  providers: [UserService,MatchService]
})
export class Year2011Component implements OnInit {

  constructor(private userService:UserService, private matchService:MatchService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshUserList();
    this.refreshMatchDetails();
  }
  resetForm(form?: NgForm) {
        if (form)
          form.reset();
        this.userService.selectedUser = {
          _id: "",
          name: "",
          email: "",
          description: "",
          year:2011
        }
  }

  onSubmit(form: NgForm) {

        this.userService.postUser(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshUserList();
          M.toast({ html: 'Saved successfully', classes: 'rounded' });

      });


    }

    refreshUserList() {
      this.userService.getUserList().subscribe((res) => {
        this.userService.users = res as User[];
      });
    }
    refreshMatchDetails() {
      this.matchService.getMatchDetails().subscribe((res) => {
        this.matchService.matches = res as Match[];

        console.log(this.matchService.matches);
      });
    }
}
