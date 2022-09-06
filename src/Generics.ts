

class KeyValuePair<K, V>{
    constructor(public key: K, public value: V) { }
}

let pair = new KeyValuePair<number, string>(1, 'Chuck');

let pair2 = new KeyValuePair<string, string>('Chuck', 'Catron');


class ArrayUtils {
    static wrapInArray<T>(value: T): [T] {
        return [value];
    }
}

let utils = ArrayUtils.wrapInArray<number>(1);

interface Result<T> {
    data: T | null;
    error: string | null;
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null };
}

interface User {
    username: string;
}

interface IProduct {
    title: string;
}

let result = fetch<User>('url');
result.data?.username;

let result2 = fetch<IProduct>('url');
result2.data?.title;


function echo<T extends IProduct>(value: T): T {
    return value;
}
class Product implements IProduct {
    constructor(public title: string) { }
}
echo(new Product('widget'));

interface IProduct2 {
    name: string;
    price: number;
}

class Product2 implements IProduct2 {
    constructor(public name: string, public price: number) { }
}

class Store<T>{
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }

    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value)
    }
}

class CompressableStore<T> extends Store<T>{
    compress() { }
}

let store = new CompressableStore<IProduct2>();
store.add(new Product2('widget', 2.00));
store.find('name', 'Widget');

store.compress();

class SearchableStore<T extends { name: string }> extends Store<T>{
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

class ProductStore extends Store<IProduct>{
    filterByCategory(category: string): IProduct[] {
        return [];
    }
}

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K]
}