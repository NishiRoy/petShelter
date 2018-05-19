import { Component, OnInit } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpService } from '../http.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor(private _httpservice:HttpService,private route:ActivatedRoute,private router:Router){ }

  petDetails:any;
  errors=[];
  errorsVal:Boolean;

  ngOnInit() {

    this.petDetails={name:'',type:'',description:'',skillone:'',skilltwo:'',skillthree:''}

    
  }

  onSubmit(event){

    event.preventDefault();
    this.errors=[];

    if(this.petDetails.name=='')
    {
      this.errorsVal=true;
      this.errors.push({'message':'Give your pet a name Yo!'});
    }
    else if(this.petDetails.name.length<3)
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
            let temp=this._httpservice.createAPet(this.petDetails);

        temp.subscribe(data=>{
              if(data['message']=='error'){
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
