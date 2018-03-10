import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../questios';

@Component({
    selector: 'wg-dynamic-form-question',
    templateUrl: './dynamic-form-question.component.html',
    styles: []
})
export class DynamicFormQuestionComponent {

    @Input() question: QuestionBase<string>;
    @Input() form: FormGroup;

    constructor() {
    }

    get isValid() {
        return this.form.controls[this.question.options.key].valid;
    }
}
