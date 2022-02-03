import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store'
import { PostMemberLoginAction } from '../../store/actions/member.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, AfterViewInit {
  readonly width: Number = 768;
  currentSelectIndex = 0;
  isMoblie: boolean = false;
  constructor(
    private store: Store<fromStore.State>
  ) { }

  @HostListener('window:resize', ['$event'])
  ngAfterViewInit(): void {
    if (window.innerWidth > this.width) {
      this.isMoblie = false;
    } else {
      this.isMoblie = true;
    }
  }

  ngOnInit(): void {
  }

  handleChangeTab({ index }) {
    this.currentSelectIndex = index
  }

  onSumbit = (value) => {
    this.store.dispatch(PostMemberLoginAction(value));

  }
}
