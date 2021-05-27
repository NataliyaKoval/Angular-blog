import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    {path: 'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
    {path: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'},
    {path: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80'},
    {path: 'https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {path: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {path: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {path: 'https://images.unsplash.com/photo-1516125073169-9e3ecdee83e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
  ];
  ngOnInit(): void {
  }

}
