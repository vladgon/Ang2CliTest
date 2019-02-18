import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from './questios';
import {QuestionControlService} from './question-control.service';
import {QuestionService} from './question.service';

declare var WebUI: any;
declare var Rust: any;

@Component({
    selector: 'wg-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [QuestionControlService, QuestionService],
    styles: []
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';
    webui = Rust.webui as Promise<(a: any) => String>;
    print_from_js: (String) => String = WebUI.print_from_js;


    constructor(private qcs: QuestionControlService, private questionsService: QuestionService) {
        this.questions = questionsService.getQuestions();
    }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit() {
        console.log(this.print_from_js('Print from JS static'));
        this.webui.then((a: any) => console.log(a.print_from_js(JSON.stringify(this.form.value))));
        this.payLoad = JSON.stringify(this.form.value);
    }
}
