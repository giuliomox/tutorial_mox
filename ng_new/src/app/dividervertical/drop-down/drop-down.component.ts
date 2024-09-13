import { Component, OnInit } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { product } from './product';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
    selector: 'drag-drop-drop-indicator-demo',
    standalone: true,
    imports: [DragDropModule,product,NgFor,NgIf],
    templateUrl: './drop-down.component.html',
    styleUrls: ['./drop-down.component.css']
})
export class DragDropDropIndicatorDemo implements OnInit {
    availableProducts: product[] | undefined;

    selectedProducts: product[] | undefined;

    draggedProduct: product | undefined | null;

    ngOnInit() {
        this.selectedProducts = [];
        this.availableProducts = [
            {id:'1', name: 'Nexus S'},
            {id:'2', name: 'Motorola XOOM™ with Wi-Fi'}
        ]
    }

    dragStart(name: product) {
        this.draggedProduct = name;
    }

    drop() {
        if (this.draggedProduct) {
            let draggedProductIndex = this.findIndex(this.draggedProduct);
            this.selectedProducts = [...(this.selectedProducts as product[]), this.draggedProduct];
            this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
            this.draggedProduct = null;
        }
    }

    dragEnd() {
        this.draggedProduct = null;
    }

    findIndex(product: product) {
        let index = -1;
        for (let i = 0; i < (this.availableProducts as product[]).length; i++) {
            if (product.id === (this.availableProducts as product[])[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
}