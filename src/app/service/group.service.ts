import { Injectable } from '@angular/core';
import { Groups } from '../interface/group';
import { Request } from '../utils/request';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private request: Request,
  ) { }

  getGroup() {
    return this.request.get<Groups>("group");
  }
}
