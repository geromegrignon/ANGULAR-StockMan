import { Component, OnInit, ViewChild } from '@angular/core';
import { ProviderFormComponent } from '../provider-form/provider-form.component';

@Component({
  selector: 'app-provider-new',
  templateUrl: './provider-new.component.html',
  styleUrls: ['./provider-new.component.css']
})
export class ProviderNewComponent implements OnInit {

  @ViewChild(ProviderFormComponent) providerForm: ProviderFormComponent;

  constructor() { }

  ngOnInit() {
  }

  create(): void {
    this.providerForm.create();
  }

}
