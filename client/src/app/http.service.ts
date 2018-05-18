import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    console.log("Getting all products Service");
    return this._http.get('/pets');
  }

  getAPet(id){
    console.log("Getting a pet with the id:",id);
    return this._http.get('/pets/'+id);
  }

  editAPet(id,values){
    console.log("Editing a pet");
    return this._http.post('/edit/'+id,values);
  }

  adoptAPet(id){
    console.log('Adopting a pet');
    return this._http.get('/destroy/'+id);
  }

  createAPet(values){
    console.log("creating a new pet");
    return this._http.post('/create',values);
  }

  createALike(id,value){
    console.log('Liking',id,value);
    return this._http.post('/like/'+id,{data:value});
  }
}
