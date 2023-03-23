import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Tipo } from '../types/tipo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tipo: Tipo | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LoginService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.tipo = param['tipo'];
    });
  }

  login(value: any): void {
    this.service.login(this.tipo, value).subscribe({
      next: (value) => {
        console.log(value)

      },
      error: (err) => {
        console.error(err)
      },
    })

    this.router.navigate(['/cadastro'])
  }
}
