import {Injectable} from '@angular/core';
import {DropdownQuestion, Options, QuestionBase, TextboxQuestion} from './questios';


@Injectable()
export class QuestionService {

    getQuestions(): QuestionBase<string>[] {
        const questions: QuestionBase<string>[] = [

            new DropdownQuestion(<Options<string>>{
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    {key: 'solid', value: 'Solid'},
                    {key: 'great', value: 'Great'},
                    {key: 'good', value: 'Good'},
                    {key: 'unproven', value: 'Unproven'}
                ],
                order: 3
            }),

            new TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 11
            }),

            new TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];

        return questions.sort((a, b) => a && a.options && a.options.order &&
            b && b.options && b.options.order &&
            a.options.order - b.options.order || 0);
    }
}


