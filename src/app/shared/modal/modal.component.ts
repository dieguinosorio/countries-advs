import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Countri } from 'src/app/domain/models/countri';
import { FiltersCountri } from 'src/app/domain/models/countri.filters';
import { filterCountries, selectFavorite, showModal, unSelectFavorite } from 'src/app/store/actions/countri.actions';
import { selectCountries } from 'src/app/store/selectors/countri.selectors';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit,OnDestroy {
  modalShow:boolean = false;
  countri!:Countri;
  filters:FiltersCountri;
  destroy$:Subject<boolean> = new Subject<boolean>();
  constructor(private store:Store) {
  }

  ngOnDestroy(): void {
    console.log("Entro al destroy modal")
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.store.select(selectCountries).pipe(
      takeUntil(this.destroy$)
    ).subscribe((res:any)=>{
      this.modalShow = res.modalShow;
      this.countri = res.countriSelected;
      this.filters = res.filters;
    })
  }

  onClosedModal():void{
    this.store.dispatch(showModal({show:false,countri:null}))
  }

  onClickFavorite():void{
    let refCountri = {...this.countri};
    refCountri.favorite = true;
    this.countri = {...refCountri}
    this.store.dispatch(selectFavorite({countri:refCountri}))
    this.store.dispatch(filterCountries(this.filters))
  }

  onClickUnFavorite():void{
    let refCountri = {...this.countri};
    refCountri.favorite = false;
    this.countri = {...refCountri}
    this.store.dispatch(unSelectFavorite({countri:refCountri}))
    this.store.dispatch(filterCountries(this.filters))
  }

}
