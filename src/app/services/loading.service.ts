import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
    private _selector: string = 'page-preloader';
    private _element: HTMLElement;
    loading: boolean = false; // spinner

    constructor() {
        this._element = document.getElementById(this._selector);
    }

    public show(): void {        
        this._element.style.display = 'block';
    }

    public hide(delay: number = 0): void {
        setTimeout(() => {
            this._element.style.display = 'none';
        }, delay);
    }
}