import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit {

  @Input() totalQuantity: string
  @Input() currentPage: string
  initPage: string = "1";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const observer = {
      next: (value: string) => {
        this.currentPage = value;
      },
      error: (error: any) => {
        console.log(`error:${error}`);
      },
      complete: () => { }
    }

    this.route.queryParamMap.pipe(map(params => params.get('page'))).subscribe(observer);
  }

}
