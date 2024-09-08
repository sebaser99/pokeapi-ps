import { HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { PokeApiList } from '../../interfaces/PokeAPiList';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Pokemon } from '../../interfaces/Pokemon';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDialogComponent } from '../pokemon-dialog/pokemon-dialog.component';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [HttpClientModule,  MatCardModule,
    MatButtonModule, PokemonCardComponent],
  providers: [PokeapiService],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
  constructor(private pokeApi: PokeapiService){}

  pokemonList?: PokeApiList;
  pokemones : Pokemon[] = [];

  ngOnInit(): void {
    this.pokeApi.getPokemonList().subscribe({
      next: (data: any)=> {
        this.pokemonList = data
        this.pokemonList?.results.forEach(pokemon => {
          this.pokeApi.getPokemon(pokemon.url).subscribe({
            next: (data: any) => {
              this.pokemones.push(data)
            },
            error: (error)=> {
              console.log(error)
            }
          })
        })
      },
      error: (error: any)=> {
        console.log(error)
      }
    })
  }




}
