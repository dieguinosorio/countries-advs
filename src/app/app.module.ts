import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Ngrx modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


import { AppComponent } from './app.component';
import { CountriGateway } from './domain/models/gateway/countri-gateway';
import { CountriApiService } from './infraestructure/driven-adapter/countri/countri-api.service';
import { CountriesCardComponent } from './UI/view-models/countries-card/countries-card.component';
import { CountriesHeaderComponent } from './UI/view-models/countries-header/countries-header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './store/app.state';
import { CountriEffects } from './store/effects/countri.effects';
import { CountriesContinentsComponent } from './UI/view-models/countries-continents/countries-continents.component';
import { CountriesContinentsItemsComponent } from './UI/view-models/countries-continents-items/countries-continents-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './shared/modal/modal.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesCardComponent,
    CountriesHeaderComponent,
    CountriesContinentsComponent,
    CountriesContinentsItemsComponent,
    ModalComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([CountriEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule,
    StoreDevtoolsModule.instrument({ name:'TEST'})
  ],
  providers: [{provide:CountriGateway,useClass:CountriApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
