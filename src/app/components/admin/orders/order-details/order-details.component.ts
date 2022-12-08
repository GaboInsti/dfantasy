import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  mobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.mediaQuery();
  }

  mediaQuery() {
    const medium = '(min-width: 768px)';
    this.breakpointObserver.observe(medium).subscribe(state => this.mobile = !state.matches);
  }

}
