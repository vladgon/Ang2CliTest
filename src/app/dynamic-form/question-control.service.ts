import {Injectable} from '@angular/core';
import {QuestionBase} from './questios';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class QuestionControlService {

    toFormGroup(questions: QuestionBase<any>[]) {
        const group: any = {};

        questions.forEach(question => {
            group[question.options.key] = question.options.required ?
                new FormControl(question.options.value || '', Validators.required) :
                new FormControl(question.options.value || '');
        });
        return new FormGroup(group);
    }

}
