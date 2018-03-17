import {Injectable} from '@angular/core';
import {QuestionBase} from './questios';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class QuestionControlService {

    toFormGroup(questions: QuestionBase<any>[]) {
        const group = {};

        questions.forEach(question => {
            if (question.options.key) {
                group[question.options.key] = new FormControl(question.options.value || '',
                    question.options.required ? Validators.required : null);
            }
        });
        return new FormGroup(group);
    }

}
