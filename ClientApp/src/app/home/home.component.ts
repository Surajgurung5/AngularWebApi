import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Students: Student[] = [];

  constructor(http: HttpClient, @Inject('BASE URL') baseUrl: string) {
    http.get<Student[]>(baseUrl + 'api/Students').subscribe(result => {
      this.Students = result;

    }, error => console.error(error));
  } wqq

}

interface Student {
   Id: number;
   Name: string;
    RollNumber: number;
}
