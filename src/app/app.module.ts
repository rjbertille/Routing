import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CompileListComponent} from './compile-list.component';
import { MusicListComponent } from './music-list.component';
import { PageNotFoundComponent} from './not-found.component';

const appRoutes: Routes = [
   { path: 'compile-list', component: CompileListComponent},
   { path: 'music-list', component: MusicListComponent},

   { path: '', redirectTo: '/sound' ,pathMatch :'full'},
    {path :'**', component: PageNotFoundComponent }

];


@NgModule({
  declarations: [
    AppComponent, 
    CompileListComponent,
    MusicListComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule. forRoot(
      appRoutes,
      { enableTracing:true }
    )  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
