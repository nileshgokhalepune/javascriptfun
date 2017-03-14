import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bubble-sort',
    templateUrl: 'bubblesort.component.html',
    styles: [
        `
        .swap{
            background-color:gray;
        }
        `
    ]
})
export class BubbleSort {
    private array: any = [4, 2, 10, 6, 3, 8];
    private sortedarray: any = [];
    private unsortedValues: any;
    private first: any;
    private second: any;
    private async sort() {
        this.sortedarray = [];
        if (this.unsortedValues && this.unsortedValues.length > 1) {
            this.unsortedValues.split(',').forEach((data: any) => this.sortedarray.push(parseInt(data)));
        } else {
            this.array.forEach((data: any) => this.sortedarray.push(data));
        }
        for (var i = 0; i < this.sortedarray.length; i++) {
            for (var j = i; j < this.sortedarray.length; j++) {
                if (this.sortedarray[i] > this.sortedarray[j]) {
                    //swap values
                    this.first = i;
                    this.second = j;
                    await this.sleep(5000);
                    var temp = this.sortedarray[i];
                    this.sortedarray[i] = this.sortedarray[j];
                    this.sortedarray[j] = temp;
                }
            }
        }
    }


    private sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}