import { Injectable } from "@angular/core";
import { Request } from '../utils/request';
import { getToken } from '../utils/authorize';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CollectService {
  constructor(
    private request: Request,
  ) { }

  getCollection() {
    return this.request.get<any>("collection", {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }

  postCollection(payload: any) {
    return this.request.post<any>("collection", payload, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }

  postItemToCollection(payload: any) {
    return this.request.post<any>(`collection/item/${payload.collectionId}`, payload, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }

  putCollection(id: string, payload: any) {
    return this.request.put<any>(`collection/${id}`, payload, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }

  deleteCollection(id: string) {
    return this.request.get<any>(`collection/${id}`, {
      headers: new HttpHeaders({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }

  deleteCollectionItem(id: string, itemId: string) {
    return this.request.delete<any>(`collection/${id}/${itemId}`, {
      headers: new Headers({
        Authorization: `bearer ${getToken()}`,
      })
    })
  }
}
