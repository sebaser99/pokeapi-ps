import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Pokemon } from '../../interfaces/Pokemon';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDialogComponent } from '../pokemon-dialog/pokemon-dialog.component';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  constructor( public dialog: MatDialog){}

  @Input() pokemon?: Pokemon;

  playSound(soundSource: string){
    const audio = new Audio();
    audio.src = soundSource;
    audio.load();
    audio.play();
  }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(PokemonDialogComponent, {
      data: this.pokemon,
      width: '400px',  // Ancho del diálogo
      maxHeight: '80vh' // Máxima altura del diálogo
    });
  }
}
