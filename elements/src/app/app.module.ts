import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {MatSlideToggleModule, MatGridListModule, MatCheckboxModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  entryComponents: [
    TestComponentComponent
  ],
  declarations: [
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule, MatGridListModule, MatCheckboxModule
  ],
  /* providers: [],
  bootstrap: [AppComponent] */
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(TestComponentComponent, { injector });
    customElements.define('test-component', el);
  }
  ngDoBootstrap() {}
}
