import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[] = [];
  public subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // il faut initialiser les users ici avec le service
    this.subscription = this.userService.users$.subscribe((users: string[]) => {
      this.users = users;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
