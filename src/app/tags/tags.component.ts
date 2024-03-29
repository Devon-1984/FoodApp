import { Component } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  tags:Tag[] = [];
  constructor(private fs:FoodService){ }

  ngOnInit():void{
    this.tags = this.fs.getAllTags();
  }
}
