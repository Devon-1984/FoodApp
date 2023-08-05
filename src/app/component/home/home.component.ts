import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Foods[] = [];
  constructor(private fs:FoodService, private route:ActivatedRoute){ }
  ngOnInit():void{
    this.route.params.subscribe(params=>{
      if(params['searchItem']){
       this.foods= this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      }
      else if(params['tag']){
        this.foods = this.fs.getAllByTag(params['tag'])
      }
      else
      this.foods = this.fs.getAll();

    })
  }
}
