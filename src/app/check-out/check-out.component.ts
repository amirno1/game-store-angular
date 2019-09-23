import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ProductService } from "../product.service";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"]
})
export class CheckOutComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}
  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });
  onSubmit(customerData) {
    console.warn("your order has been submitted", customerData);
    console.log(this.productService.items);
    this.productService.onClear();
    this.checkoutForm.reset();
  }
  ngOnInit() {}
}
