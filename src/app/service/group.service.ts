import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupCreate, Groups, GroupUpdate } from '../interface/group';
import { getToken } from '../utils/authorize';
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

  postGroup(payload: any) {
    return this.request.post<any>("group", payload, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }

  putGroup(id: string, payload: GroupUpdate) {
    return this.request.put<GroupUpdate>(`group/${id}`, payload)
  }

  deleteGroup(id: string) {
    return this.request.delete<any>(`group/${id}`)
  }

}
