import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service/service.service";
import {Book} from "../model/Book";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  book = new Book(0, '', '', '');
  id!: number;
  title: string = '';
  description: string = '';
  author: string = '';

  constructor(private bookService: ServiceService) {
  }


  findAll(){
    this.bookService.findAll().subscribe((data) =>{
      this.books = data;
    })
  }

  ngOnInit(): void {
    this.findAll();
  }

  delete(id: number) {
    this.bookService.delete(id).subscribe(()=>{
      alert("Delete Successfully!")
      this.findAll();
    })
  }

  showEdit(book: Book) {
    this.bookService.findById(book.id).subscribe((data)=>{
      this.book = data
    })
  }

  create(book: Book) {
    this.bookService.create(book).subscribe(() =>{
      alert("Create Successfully!")
      this.close()
      this.findAll();
    })
  }

  edit(bookCreate: Book) {
    this.bookService.editBook(bookCreate).subscribe((data) =>{
      alert("Update Successfully!")
      this.findAll();
      this.close()


    })
  }
  close(){
    this.book =new Book(0, '', '', '')
  }

  showDetails(book: Book) {
    this.bookService.findById(book.id).subscribe((data)=>{
      this.book = data
    })
  }

}
