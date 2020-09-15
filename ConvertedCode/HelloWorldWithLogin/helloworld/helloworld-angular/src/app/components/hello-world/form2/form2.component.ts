import { Component, ChangeDetectorRef, ElementRef, Output, Renderer2, ViewEncapsulation} from "@angular/core";
import { EventData, dataTransfer} from "@mobilize/base-components";
import { FormComponent} from "@mobilize/winforms-components";
import { WebMapService} from "@mobilize/angularclient";

@Component({
    selector: "hello-world-form2",
    styleUrls: ["./form2.component.css"],
    templateUrl: "./form2.component.html",
    encapsulation: ViewEncapsulation.None
})
@dataTransfer(["frmHelloWorldForm2"])
export class Form2Component extends FormComponent {
    protected webServices : WebMapService;

    constructor (wmservice : WebMapService, changeDetector : ChangeDetectorRef, render2 : Renderer2, elem : ElementRef) {
        super(wmservice, changeDetector, render2, elem);
    }
}