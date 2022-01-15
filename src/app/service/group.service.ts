import { Injectable } from '@angular/core';
import { Groups } from '../interface/group';
import { GlobalService } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private global: GlobalService) { }

  getGroup() {
    return this.global.get<Groups>("group");
  }
}
