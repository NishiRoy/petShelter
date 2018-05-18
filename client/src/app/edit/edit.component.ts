import { Component, OnInit } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpService } from '../http.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _httpservice:HttpService,private route:ActivatedRoute,private router:Router,) { }

  petDetails:any;
  errors=[];
  errorsVal:Boolean;
  id:any;

  ngOnInit() {

    this.petDetails={name:'',type:'',description:'',skillone:'',skilltwo:'',skillthree:''}

    this.id=this.route.snapshot.paramMap.get('id');

    this.onload();

    
  }

  onload(){

    let temp=this._httpservice.getAPet(this.id);

    temp.subscribe(data=>{
      this.petDetails={name:data['data'][0].name,type:data['data'][0].type,description:data['data'][0].description,skillone:data['data'][0].skillone,skilltwo:data['data'][0].skilltwo,skillthree:data['data'][0].skillthree};
      console.log(this.petDetails);
    })
  }

  onSubmit(event){

    event.preventDefault();
    this.errors=[];

    if(this.petDetails.name.trim()=='')
    {
      this.errorsVal=true;
      this.errors.push({'message':'Give your pet a name Yo!'});
    }
    else if((this.petDetails.name.trim()).length<3)
    {
      this.errorsVal=true;
      this.errors.push({'message':'What kind of name is that..Try a longer name !'});
    }
    else if(this.petDetails.type=='')
    {
      this.errorsVal=true;
      this.errors.push({'message':"We need to know what kind of pet it is"});
    }
    if(this.petDetails.description=='')
    {
      this.errorsVal=true;
      this.errors.push({'message':'Tell us something about your pet'});
    }
    else if(this.petDetails.type.length<3)
    {
      this.errorsVal=true;
      this.errors.push({'message':"That type doesn't look right, Try something longer!"});
    }
    else if(this.petDetails.description.length<3)
    {
      this.errorsVal=true;
      this.errors.push({'message':"Describe your pet in more than three characters"});
    }
    else
    {
          this.errorsVal=false;
          this.errors=[];
            console.log("I was here",this.petDetails);
            let temp=this._httpservice.editAPet(this.id,this.petDetails);

        temp.subscribe(data=>{
          if(data['message']=='unique error'){
            console.log("What the fuck")
            this.errorsVal=true;
            this.errors.push(data['data']);
          }
          else if(data['message']=='error'){
                this.errorsVal=true;

                for(let key in data['data'].errors){
                  this.errors.push(data['data'].errors[key]);
                console.log("console errors",data['data'].errors[key]);
                }
              }
              else
              {
                this.errorsVal=false;
                this.router.navigate(['/pets']);
              }

    });
  }
  }

  cancelAdd(){

    this.petDetails={name:'',type:'',description:'',skillone:'',skilltwo:'',skillthree:''};
    this.router.navigate(['/pets']);

  }

}
