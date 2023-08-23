import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss']
})
export class TrackByComponent implements OnInit {
  list = [
    {
      name: 'lily1',
      id: 1
    },
    {
      name: 'lily2',
      id: 2
    },
    {
      name: 'lily3',
      id: 3
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addPeople() {
    // this.list.unshift({
    //   name: 'lily1',
    //   id: 5
    // });
    
    //只有重新赋值时才可以看出区别
    this.list = [
      {
        name: 'lily1',
        id: 5
      },
      {
        name: 'lily2222',
        id: 2
      },
      {
        name: 'lily3',
        id: 3
      },
      {
        name: 'lily4',
        id: 4
      },
    ]
  }
  trackByItems(index: number, item: {id: number}) {
    return item.id
  }

}
