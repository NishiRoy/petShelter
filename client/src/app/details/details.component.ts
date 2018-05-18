import { Component, OnInit } from '@angular/core';
import {HttpService } from '../http.service';
import {Router } from '@angular/router';
import { ActivatedRoute }from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  petId:any;

  petDeets:any;

  constructor(private _httpservice:HttpService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.petDeets={name:'',type:'',description:'',skillone:'',skilltwo:'',skillthree:''};

    this.petId=this.route.snapshot.paramMap.get('id');
    this.onload();
  }

  onload(){

    let petDetails=this._httpservice.getAPet(this.petId);

    petDetails.subscribe(data=>{

      console.log(data);
      this.petDeets=data['data'];
    })
  }

  like(event,id){

    event.currentTarget.disabled = true;

    let temp=Number(this.petDeets[0].likes)+1;

    let likinPet=this._httpservice.createALike(id,temp);

    likinPet.subscribe(data=>{

        console.log(data);
        this.onload();
    })

  }

  adopt(id){

    let delPet=this._httpservice.adoptAPet(id);

    delPet.subscribe(data=>{
      console.log(data);

      let val=data['data'].name;

      alert(`${val} Thanks you for giving him a home`);

      this.router.navigate(['pets']);
    })
  }

}
