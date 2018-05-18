import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorsVal:Boolean=false;
  errors=[];
  allPets:any;

  constructor(private _httpservice:HttpService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.onload();
  }

  onload(){

    let petValues=this._httpservice.getAll();

    petValues.subscribe(data=>{

      if(data['message']=='error'){
        this.errorsVal=true;

        for(let key in data['data'].errors){
          this.errors.push(data['data'].errors[key]);
        console.log("console errors",data['data'].errors[key]);
        }
      }
      else{
        this.allPets=data['data'];
      }
    })
  }

  details(id){

    this.router.navigate(['/pets',id]);

  }

  edit(id){

    this.router.navigate(['/pets/edit',id]);

  }



}
