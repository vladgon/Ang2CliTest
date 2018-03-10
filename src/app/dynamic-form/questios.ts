export interface Options<T> {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    options?: { key: string, value: string }[];
}

export class QuestionBase<T> {

    constructor(public options: Options<T> = {}) {
        this.options.value = options.value;
        this.options.key = options.key || '';
        this.options.label = options.label || '';
        this.options.required = !!options.required;
        this.options.order = options.order === undefined ? 1 : options.order;
        this.options.controlType = options.controlType || 'textbox';
    }
}


export class TextboxQuestion extends QuestionBase<string> {

    constructor(options: Options<string> = {}) {
        super(options);
        this.options['controlType'] = 'textbox';
        this.options.type = options.type || '';
    }
}

export class DropdownQuestion extends QuestionBase<string> {
    constructor(options: Options<string> = {}) {
        super(options);
        this.options.options = options.options || [];
        this.options.controlType = 'dropdown';
    }
}
