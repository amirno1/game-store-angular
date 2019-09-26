import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products$: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.products$ = db.list("products").valueChanges();
  }
  notify() {
    window.alert("notified");
  }
  onNotify() {
    window.alert("shared");
  }
  ngOnInit() {}
}
