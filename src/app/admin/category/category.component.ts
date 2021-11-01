import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;

  }

  onRemoveCategory(category:any) {
    let index = this.categoryService.categoriesInService.indexOf(category);
    this.categoryService.categoriesInService.splice(index,1);
    

  }
  onSubmit(form:any) {
    //additemit vaata mitte edit 
  console.log(form);
  console.log(form.value);
  console.log(form.category);
  this.categoryService.categoriesInService.push(form.value.category)
  }
  
}
