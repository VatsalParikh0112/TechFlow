import { Component } from '@angular/core';
import { Section1 } from "./section1/section1";
import { Section2 } from "./section2/section2";
import { Section3 } from "./section3/section3";
import { Section4 } from "./section4/section4";

@Component({
  selector: 'app-dashboard',
  imports: [Section1, Section2, Section3, Section4],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
