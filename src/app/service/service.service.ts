import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from '../model/Book';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
    this.findAll();
  }

  findAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books')
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/books/' + id)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/books/${id}`)
  }

  create(book: Book): Observable<any> {
    return this.http.post(`http://localhost:3000/books`, book)
  }

  editBook(bookCreate: Book): Observable<any> {
    return this.http.put('http://localhost:3000/books/' + bookCreate.id, bookCreate)
  }

  showDetails(id: number): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/books/' + id)
  }

}
