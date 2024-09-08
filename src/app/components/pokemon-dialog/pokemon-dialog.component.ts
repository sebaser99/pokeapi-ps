import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pokemon-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, PokemonCardComponent, MatCardModule],
  templateUrl: './pokemon-dialog.component.html',
  styleUrl: './pokemon-dialog.component.scss'
})
export class PokemonDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PokemonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public pokemon: Pokemon
  ) { }
  ngOnInit(): void {
    console.log('pokemon',this.pokemon)
  }

  onClose(): void {
    this.dialogRef.close();
  }

  playSound(soundSource: string){
    const audio = new Audio();
    audio.src = soundSource;
    audio.load();
    audio.play();
  }
}
