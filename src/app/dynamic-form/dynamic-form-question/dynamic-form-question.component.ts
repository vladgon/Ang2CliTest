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

    get isValid(): boolean {
        if (this.question.options.key && this.form.controls[this.question.options.key]) {
            return this.form.controls[this.question.options.key].valid;
        } else {
            return false;
        }
    }
}
