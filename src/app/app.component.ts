import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  index:number = 0;
  img_src1: string[] = ["./assets/jabed.jpg","./assets/malek.jpg","./assets/mehedi.jpg"];
  len1:number = this.img_src1.length;
  img_src2: string[] = ["./assets/malek.jpg","./assets/mehedi.jpg"];
  len2:number = this.img_src2.length;
  img_src3: string[] = ["./assets/malek.jpg"];
  len3:number = this.img_src3.length;
  step = 1;

  constructor(private fb: FormBuilder) {}
  applicationForm: FormGroup = this.fb.group({
    name: this.fb.control('',Validators.required),
    nid: this.fb.control('',Validators.required),
    mobile: this.fb.control('',Validators.required),
    email: this.fb.control('',Validators.required),
    father_name: this.fb.control('',Validators.required),
    mother_name: this.fb.control('',Validators.required),
  })

  nextStepControl() {
    this.step++;
    this.index=0;
  }
  onSubmit(){
    this.step++;
  }

  // onSelectFile(e:any){
  //   if(e.target.files){
  //     const reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload = (event:any)=>{
  //       this.img_src.push(event.target.result);
  //     }
  //   }
  // }

  itemControl(i:number){
    this.index = i;
  }

}
