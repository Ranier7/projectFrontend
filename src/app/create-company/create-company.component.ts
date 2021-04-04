import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  company: Company = new Company();

  constructor(private companyService: CompanyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCompany(){
    this.companyService.createCompany(this.company).subscribe(data => {
      console.log(data);
      this.goToCompanyList();
    },
    error => console.log(error));
  }

  goToCompanyList(){
    this.router.navigate([`/company`]);
  }

  onSubmit(){
    console.log(this.company);
    this.saveCompany();
  }

}
