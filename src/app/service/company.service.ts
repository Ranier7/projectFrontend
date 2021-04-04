import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';

@Injectable({
    providedIn: 'root'
  })

  export class CompanyService {

    private baseURL2 = "http://localhost:8080/api/v1/empresas";
  
    constructor(private HttpClient: HttpClient) { }
  
    getCompanyList(): Observable<Company[]>{
      return this.HttpClient.get<Company[]>(`${this.baseURL2}`);
    }
    
    createCompany(company: Company): Observable<Object>{
      return this.HttpClient.post(`${this.baseURL2}`, company);
    }
    
    getCompanyById(id: number): Observable<Company>{
      return this.HttpClient.get<Company>(`${this.baseURL2}/${id}`);
    }
    
    updateCompany(id: number, company: Company): Observable<Object>{
      return this.HttpClient.put(`${this.baseURL2}/${id}`, company);
    }
    
    deleteCompany(id: number): Observable<Object>{
      return this.HttpClient.delete(`${this.baseURL2}/${id}`);
    }
  
  }