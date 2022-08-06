import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCountries } from './store/selectors/countri.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'countries';
  show:boolean = false;
  constructor(private store:Store){}

  ngOnInit(): void {
    this.store.select(selectCountries).subscribe((res:any)=>{
      this.show = res.modalShow
    })
  }
}
