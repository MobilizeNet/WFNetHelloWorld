
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponentsModule } from '@mobilize/base-components';
import { WebMapKendoModule } from '@mobilize/winforms-components';
import { WebMapService, WebMapModule } from '@mobilize/angularclient';

import * as HelloWorld from './components/hello-world';

@NgModule({
  imports: [
    CommonModule,
    BaseComponentsModule,
    WebMapKendoModule,
    WebMapModule,
  ],
  exports: [
    HelloWorld.Form1Component,
    HelloWorld.Form2Component,
  ],
  declarations: [
    HelloWorld.Form1Component,
    HelloWorld.Form2Component,
  ],
  bootstrap: [
    HelloWorld.Form1Component,
    HelloWorld.Form2Component
  ],
   providers: [WebMapService],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HelloWorldModule { }

