import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  id: number | string;
  title = 'Novo produto';
  buttonText = 'Criar';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    if (this.id) {
      this.title = 'Editar produto';
      this.buttonText = 'Editar';
    }
  }

  return(): void {
    this.router.navigate(['/products']);
  }
}
