import { Injectable } from 'angular2/core';
import { Http, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Products } from './products';

@Injectable()
export class ProductsService {


    // private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) { }

    getProducts() {
        //   return this._http.get(this.getUrl()).map(response => response.json());
        return [
            {
                imgUrl: '/uploads/img1.jpg',
                title: 'title1',
                desc: 'title1 description',
                amount: 20
            },
            {

                imgUrl: '/uploads/img1.jpg',
                title: 'title1',
                desc: 'title1 description',
                amount: 200

            },
            {
                imgUrl: '/uploads/img1.jpg',
                title: 'title1',
                desc: 'title1 description',
                amount: 200
            },
            {
                imgUrl: '/uploads/img1.jpg',
                title: 'title1',
                desc: 'title1 description',
                amount: 200
            },
            {
                imgUrl: '/uploads/img1.jpg',
                title: 'title1',
                desc: 'title1 description',
                amount: 200
            }


        ];
    }

    // getUrl() {
    //     return this._url
    // }

    // getComments(id: number) {
    //     return this._http.get(this.getUrl()+"/"+id+"/comments").map(response => response.json());
    // }
}