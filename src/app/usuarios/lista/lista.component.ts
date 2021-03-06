import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  public users: Usuario[] = [];
  public loading: boolean;
  public error: any;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select('usuarios').subscribe( usuarios => {

      this.users = usuarios.users;
      this.loading = usuarios.loading;
      this.error = usuarios.error;
    });

    this.store.dispatch( new usuariosActions.CargarUsuarios());
  }
}
