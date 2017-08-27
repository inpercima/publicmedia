import { HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Injectable()
export class FormService {

  constructor() { }

  public createBody(formGroup: FormGroup): string {
    let body = new URLSearchParams();
    Object.keys(formGroup.value).forEach(key => {
      body.set(key, formGroup.value[key]);
    });
    return body.toString();
  }

  public createHeader(): Object {
    return { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
  }
}
