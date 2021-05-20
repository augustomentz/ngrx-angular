import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(id?: string | number): void {
    if (id) {
      this.router.navigate([`products/product/${id}`]);
    } else {
      this.router.navigate(['products/product']);
    }
  }
}
