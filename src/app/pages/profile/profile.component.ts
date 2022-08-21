import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { interval, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public currentTime: Date = new Date();
  destroy$ = new Subject();

  items = [
    '#這是一個使用來練習的Angular 專案',
    '#後端使用 .NET Core 3.1',
    '#資料庫使用 MySQL'
  ];
  mode: NzCalendarMode = 'month';

  constructor(
    private route: ActivatedRoute,
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
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe(x => this.currentTime = new Date());
  }

  panelChange(change: { date: Date; mode: string }): void {
    // console.log(change.date, change.mode);
  }

  handleSelectDate(value: Date) {

  }


}
