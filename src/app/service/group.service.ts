import { Injectable } from '@angular/core';
import { GroupCreate, Groups, GroupUpdate } from '../interface/group';
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

  postGroup(payload: GroupCreate) {
    return this.request.post<GroupCreate>("group", payload)
  }

  putGroup(id: string, payload: GroupUpdate) {
    return this.request.put<GroupUpdate>(`group/${id}`, payload)
  }

  deleteGroup(id: string) {
    return this.request.delete<any>(`group/${id}`)
  }

}
