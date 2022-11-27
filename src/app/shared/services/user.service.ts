import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private todos: string[] = [];
  constructor() {}
  public addUser(username: string) {
    this.todos.push(username);
    this.users$.next(this.todos);
  }
}
