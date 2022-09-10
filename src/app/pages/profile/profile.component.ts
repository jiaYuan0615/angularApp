import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { Request } from 'src/app/utils/request';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public currentTime: Date = new Date();
  destroy$ = new Subject();

  subject$ = new Subject();

  items = [
    '#這是一個使用來練習的Angular 專案',
    '#後端使用 .NET Core 3.1',
    '#資料庫使用 MySQL'
  ];
  mode: NzCalendarMode = 'month';

  data$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private request: Request
  ) {
    const observer = {
      next: (value) => { },
      error: (error) => { },
      complete: () => { }
    }
    this.route.paramMap.pipe(map(params => params.get('username'))).subscribe(observer)
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    this.subject$.next();
    this.subject$.complete();
  }

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntil(this.subject$))
      .subscribe(() => this.currentTime = new Date());
    // this.subscription = interval(1000).subscribe(() => this.currentTime = new Date());

  }

  panelChange(change: { date: Date; mode: string }): void {
    // console.log(change.date, change.mode);
  }

  handleSelectDate(value: Date) {

  }


}
