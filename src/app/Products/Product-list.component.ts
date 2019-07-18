import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';

@Component({
    selector: 'prod-list',
    templateUrl: 'Product-list.component.html',
    styleUrls: ['Product-list.component.css']

})
export class Productlistcomponent implements OnInit {
    private _PageTitle: string = "syamu products";
    public get PageTitle(): string {
        return this._PageTitle;

    }
    public set PageTitle(value: string) {
        this._PageTitle = value;
    }
    ImageWidth: number = 20;
    ImageMargin: number = 2;
    showImage: boolean = false;
    FilteredProducts: IProduct[];

    ListFilter: string;
    public get _ListFilter(): string {
        return this.ListFilter;
    }
    public set _ListFilter(value: string) {
        this.ListFilter = value;
        this.FilteredProducts = this.ListFilter ? this.performFilter(this.ListFilter) : this.Products;

    }

    Products: IProduct[] = [{
        "ProductId": 1,
        "ProductName": "Garden Cart",
        "ProductCode": "GDN-0023",
        "ReleaseDate": "March 18,2016",
        "Description": "15 gallon capacity",

        "Price": 32.99,
        "StarRating": 4.5,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "ProductId": 2,
        "ProductName": "Hammer",
        "ProductCode": "TBX-0048",
        "ReleaseDate": "May 21,2016",
        "Description": "Curved claw steel",
        "Price": 8.9,
        "StarRating": 5,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"

    }];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {

    }
    constructor() {
        this.FilteredProducts = this.Products;
        this.ListFilter = 'cart'



    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.Products;
        //filter();


    }
}