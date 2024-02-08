import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {MiscItemInfoPDTO} from "./miscItemInfoPDTO";
import {debounceTime, delay, Observable, of, Subject, Subscription, switchMap, tap} from "rxjs";
import {PageOfMiscItemInfoPDTO} from "./pageOfMiscItemInfoPDTO";

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html'
})
export class DataListComponent implements OnInit, AfterViewInit, OnDestroy {



  @Output()
  private selected = new EventEmitter<MiscItemInfoPDTO>();

  @ViewChild('searchText')
  private searchText: ElementRef | undefined;

  dealerOnly = false;

  items: MiscItemInfoPDTO[] | undefined;

  isLoading = false;
  searchEntered = false;
  moreItemsFound = false;
  selectedItem: MiscItemInfoPDTO | undefined;

  private searchTextChanged: Subject<string> = new Subject<string>();

  constructor(){}

  ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }

  ngOnInit(): void {
    this.searchTextChanged
      .pipe(
        debounceTime(300),
        tap(() => (this.isLoading = true)),
        switchMap((searchText) => {
          return this.searchMiscChargingItem(searchText)
              .pipe(
                tap(() => {
                  this.isLoading = false;
                  this.searchEntered = false;
                })
              );
        })
      )
      .subscribe((result) => {
        this.items = result.content;
        // @ts-ignore
        this.moreItemsFound = result.totalElements > result.numberOfElements;
      });

    // @ts-ignore
    this.searchText.nativeElement.focus();
  }

  searchMiscChargingItem(searchText: string): Observable<PageOfMiscItemInfoPDTO> {

    return of(<PageOfMiscItemInfoPDTO> {content:[
        {miscChargingNumber:'1', description:'descA'},
        {miscChargingNumber:'2', description:'descB'},
        {miscChargingNumber:'3', description:'descC'}
      ], totalElements:3, numberOfElements:3}).pipe(delay(500));
  }

  ngAfterViewInit() {
    // @ts-ignore
    setTimeout(() => this.searchText.nativeElement.focus());
  }


  search(searchText: string) {
    this.selectedItem = undefined;
    if (searchText && searchText.length > 0) {
      this.searchEntered = true;
      if (this.items) {
        this.selectedItem = this.items.find(
          (item) => searchText === `${item.miscChargingNumber} - ${item.description}`
        );
        if (this.selectedItem) {
          this.selected.emit(this.selectedItem);
        }
      }
      this.searchTextChanged.next(searchText);
    }
  }
}
