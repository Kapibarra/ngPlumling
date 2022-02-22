import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Mail } from './form'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
mail!: Mail;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
onSubmit(formValue: any) {
  const formData = new FormData(formValue);
  
  console.log(formValue);
  console.log(formData);
  
  this.http.post('/assets/handler.php', formValue).subscribe((responce: any) => {
  
  console.log(responce);

  })
}
}
