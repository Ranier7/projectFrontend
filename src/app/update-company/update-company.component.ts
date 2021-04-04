import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  id!: number;
  company: Company = new Company();

  constructor(private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.companyService.getCompanyById(this.id).subscribe(data => {
      this.company = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.companyService.updateCompany(this.id, this.company).subscribe(data => {
      this.goToCompanyList();
    }
    , error => console.log(error)); 
  }

  goToCompanyList(){
    this.router.navigate([`/company`]);
  }

}
