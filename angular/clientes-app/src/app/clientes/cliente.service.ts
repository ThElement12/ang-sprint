import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {
  private urlEndpPoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }
  
  getClientes(): Observable<Cliente[]>{ 
    //return of(CLIENTES); 
    return this.http.get(this.urlEndpPoint).pipe(
      map( (response) => response as Cliente[])
    );
  }
}
