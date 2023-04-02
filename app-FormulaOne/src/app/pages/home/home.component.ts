import { Component, NgModule } from '@angular/core';
import {Employee, Company, Service } from '../../services/service-formula-one.service';
import { DxTabPanelModule, DxCheckBoxModule, DxTemplateModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { EmptyExpr } from '@angular/compiler';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ],
  providers: [Service],
  preserveWhitespaces: true,
})

export class HomeComponent {
  employee: any;
  step =0;
  companies: any;


  itemCount: any;

  constructor(public service: Service) {
    service.getCompanies().subscribe((data: any)=>{
      this.companies = data;
      this.itemCount = this.companies.length;
      this.employee=this.getMyDrivers(this.companies[0].id)
    });
  
    
    
  

  }

  public  getMyDrivers( id: any){
    this.service.getDrivesTeam(id).subscribe((data: any)=>{
      this.employee = data;
      
    });
   return this.employee;
  }



   selectionX(e:any){
    
    this.employee=this.getMyDrivers(e.addedItems[0].id);
   
  }
 

}

