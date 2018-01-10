import { Component } from '@angular/core';

@Component({
   template: `
    <h2 style="font-family:Arial, Helvetica, sans-serif">MUSIC</h2>
    <p style="font-family:Arial, Helvetica, sans-serif">Get your sound here</p>
    
    <button routerLink="/sound">Go to music</button>
    `

})
export class MusicListComponent { }