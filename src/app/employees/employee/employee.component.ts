import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
 
export class EmployeeComponent implements OnInit {

  ngOnInit() {
    this.resetForm();
  }
  constructor(private service:EmployeeService,private toastr:ToastrService){}

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    
    this.service.formData={
      EmpId:0,
      EmpName:'',
      EmpSalary:null
    }
  }
onSubmit(form:NgForm)
{
if(form.value.EmpId==null || form.value.EmpId==0) {
this.InsertRecord(form);
}
else{
  this.UpdateRecord(form);
}
}
InsertRecord(form:NgForm){
this.service.postEmployee(form.value).subscribe(res=>{
  this.toastr.success('Inserted Record Successfully','Emp Register');
  this.resetForm(form)
});
}
UpdateRecord(form:NgForm){
  this.service.putEmployee(form.value.EmpId,form.value).subscribe(res=>{
    this.toastr.success('Updated Record Successfully','Emp Register');
    this.resetForm(form)
  }); 
  }

}
