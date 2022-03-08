import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from './formMini';
@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
  mail!: Mail;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(formValue: any) {
    var formData = new FormData();
    for (var key in formValue) {
      formData.append(key, formValue[key]);
    }
    this.http
      .post('/assets/handlerMini.php', formData)
      .subscribe((responce: any) => {
        console.log(responce);
      });
      const popUp = document.getElementById('popUp');
      console.log(popUp);
      setTimeout(() => {
        popUp?.classList.add('popUpVisible')
      }, 1000);
      setTimeout(() => {
        document.getElementById('popUp')?.classList.remove('popUpVisible')
      }, 4000);  
  }
}
