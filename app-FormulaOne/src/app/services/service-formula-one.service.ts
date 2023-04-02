import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})



export class Company {


  id!: number;
  name!: string;
  url_image!: string;
  team_chief!: string;
  technical_chief!: string;
  points!: number;
  base!: string;
}

export class Employee {
  id_driver!: number;
  name!: string;
  country!: string;
  points!: number;
  date_of_birth!: number;
  id_team!: number;
  url_image!: string;

}




@Injectable()
export class Service {
  API_URL = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getCompanies(){
    const respuesta  = this.http.get(`${this.API_URL}/F1Teams/teams`);
    return respuesta;
    
  }

  getDrivesTeam(id:any) {
    const respuesta  = this.http.get(`${this.API_URL}/F1Drivers/team/drivers/`+id);
    return respuesta;
  }

  


}
