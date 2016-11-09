import { Component } from '@angular/core';
import { Book, mockBooks } from './mocks/books';
import { categories, Category } from './mocks/categories';

@Component({
  moduleId: module.id,
  selector: 'bookstore',
  templateUrl: 'app.template.html'
})
export class AppComponent {
  books: Book[] = mockBooks;
  categories: Category[] = categories;
  navClosed: boolean = true;

  getBookDetails(): void {
    console.log('Will be implemented in the next section');
  }

  public ngOnInit(){
    this.changeCategory = this.changeCategory.bind(this);
  }

  changeCategory(selectedCategory: Category): void {
    this.categories = this.categories.map(category => {
      if(category === selectedCategory) 
        category.selected = true;
      else  
        category.selected = false;
      return category;
    });

    this.filterBooks(selectedCategory);
  }

  filterBooks(category: Category): void {
    if(category.name === "All") {
      this.books = mockBooks
      return;
    }
    this.books = mockBooks.filter(book => book.category === category.name);
  }

  search(searchTerm: string): void {
    this.books = mockBooks.filter(book => {
      searchTerm = searchTerm.toLowerCase();
      return book.title.toLowerCase().includes(searchTerm) ||
              book.category.toLocaleLowerCase().includes(searchTerm);
    });
  }

  toggleSidebar(open) {
    this.navClosed = open;
  }
}
