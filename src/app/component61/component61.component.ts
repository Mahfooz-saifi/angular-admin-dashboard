import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-component61',
  templateUrl: './component61.component.html',
  styleUrls: ['./component61.component.scss']
})
export class Component61Component implements OnInit {
  values: string[] | undefined;
 
  items = [{ tabHeader: 'Assessment' },{ tabHeader: 'My Assessments' }];

  activeIndex!: number
  constructor() { }
  
    ngOnInit() {
    
    }
  
   
}
