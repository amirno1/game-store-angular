import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  products$: Observable<any[]>;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    db: AngularFireDatabase
  ) {
    this.products$ = db.list("products").valueChanges();
  }
  product;

  buy(product) {
    this.productService.onBuy(product);
  }

  ngOnInit() {
    this.products$
      .pipe(
        map(product =>
          product.filter(item => {
            if (item.id === Number(this.route.snapshot.params.id)) {
              this.product = item;
            }
          })
        )
      )
      .subscribe();
  }
}
