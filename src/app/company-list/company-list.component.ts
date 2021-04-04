import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  company: Company[] = [];

  constructor(private companyService: CompanyService,
    private router: Router) { }

  ngOnInit(): void {
      this.getCompany();
  }

  private getCompany(){
    this.companyService.getCompanyList().subscribe(data => {
      this.company = data;
    });
  }

  companyDetails(id: number){
    this.router.navigate(['company-details', id]);
  }

  updateCompany(id: number){
    this.router.navigate([`update-company`, id]);
  }

  deleteCompany(id: number){
    this.companyService.deleteCompany(id).subscribe( data => {
      console.log(data);
      this.getCompany();
    })
  }

}
