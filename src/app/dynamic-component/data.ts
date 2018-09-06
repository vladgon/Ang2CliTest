export class Data {
    constructor(public initData: string) {
    }

    getData(name: string) {
        if (name === 'alert') {
            return `Alert Data 1 ${name} - ${this.initData}`;
        } else {
            return `Success Data 1 ${name} - ${this.initData}`;
        }
    }
}
