import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from './questios';
import {QuestionControlService} from './question-control.service';
import {QuestionService} from './question.service';

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

    constructor(private qcs: QuestionControlService, private questionsService: QuestionService) {
        this.questions = questionsService.getQuestions();
    }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
