import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { HeavyLoadersFastComponent } from "../../../shared/heavy-loaders/heavy-loaders-fast.component";
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent, HeavyLoadersFastComponent],
  template: `

    <app-title [title]="titleLabel()" />

    @if( user()){
      <section>
        <img [srcset]="user()?.avatar" [alt]="user()?.first_name">
        <div>
          <h3>{{user()?.first_name}} {{user()?.last_name}}</h3>
          <p>{{user()?.email}}</p>
        </div>

      </section>
    }@else{
      <p>Cargando información</p>
    }
  `,
})
export default class UserComponent {


  private route = inject( ActivatedRoute );
  private usersService = inject( UsersService );


  // public user = signal<User | undefined>( undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) =>  this.usersService.getUserById( id ))
    )
  );

  public titleLabel = computed( () => {

    if(this.user()){
      return `Información del usuario: ${this.user()?.first_name} - ${this.user()?.last_name}`
    }

    return 'Información del usuario';

  });

  constructor(){

  }

}
