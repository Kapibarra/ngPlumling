import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Mail } from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  mail!: Mail;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  onSubmit(formValue: any) {

    var formData = new FormData();
    for (var key in formValue) {
      formData.append(key, formValue[key]);
    }
    this.http
      .post('/assets/handler.php', formData)
      .subscribe((responce: any) => {
        console.log(responce);
      });

    const popUp = document.getElementById('popUp');
    console.log(popUp);
    setTimeout(() => {
      popUp?.classList.add('popUpVisible')
    }, 2000);
    setTimeout(() => {
      document.getElementById('popUp')?.classList.remove('popUpVisible')
    }, 6000);
  }

  
}
