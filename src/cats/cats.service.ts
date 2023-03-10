import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat/cat.interface';

@Injectable() 
export class CatsService {
    private cats: Cat[] = [];

    createCat(cat: Cat) {
        this.cats.push(cat);
    }

    getAll(): Cat[] {
        return this.cats;
    }
}
