import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebMapKendoModule } from '@mobilize/winforms-components';
import { WebMapService, WebMapModule } from '@mobilize/angularclient';

import * as HelloWorld from './components/hello-world';
import * as Definitions from './component_definitions';

@NgModule({
  imports: [
    CommonModule,
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
  entryComponents: [
            Definitions.HelloWorld_Form1Component,
            Definitions.HelloWorld_Form2Component,
  ],
   providers: [WebMapService],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HelloWorldModule { }

