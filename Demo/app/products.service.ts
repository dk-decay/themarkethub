import { Injectable } from 'angular2/core';
import { Http, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Products } from './products';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

    constructor(private _http: Http) { }

    saveProductDetails(prodObj: Products, username: string, url: string, files: Array<File>) {
        console.log('Making request');
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            formData.append("category", prodObj.category);
            formData.append("amount", prodObj.amount);
            formData.append("desc", prodObj.desc);
            formData.append("title", prodObj.title);
            formData.append("username", username);

            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

    getProducts() {
        return this._http.get('/findAllItemsForSale')
            .map(response => response.json());
    }

}