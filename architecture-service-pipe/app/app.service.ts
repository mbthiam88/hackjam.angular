import { Injectable } from '@angular/core';
import { mockBooks } from './mocks/books';
import { categories } from './mocks/categories';

@Injectable()
export class AppService {
    getBooks(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockBooks)
            }, 1000)
        });
    }

    getCategories(){
        return Promise.resolve(categories);
    }
}