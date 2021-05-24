import {Component, OnInit} from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  pageSize = 4;
  page = 1;
  table = [
    {
      name: faker.name.findName(),
      address: faker.address.city(),
      company: faker.company.catchPhrase()
    },
    {
      name: faker.name.findName(),
      address: faker.address.city(),
      company: faker.company.catchPhrase()
    },
    {
      name: faker.name.findName(),
      address: faker.address.city(),
      company: faker.company.catchPhrase()
    },
    {
      name: faker.name.findName(),
      address: faker.address.city(),
      company: faker.company.catchPhrase()
    },
    {
      name: faker.name.findName(),
      address: faker.address.city(),
      company: faker.company.catchPhrase()
    },
    {
      name: faker.name.findName(),
      address: faker.address.city(),
      company: faker.company.catchPhrase()
    },
    {
      name: faker.name.findName(),
      address: faker.address.city(),
      company: faker.company.catchPhrase()
    },
    {
      name: faker.name.findName(),
      address: faker.address.city(),
      company: faker.company.catchPhrase()
    },
    {
      name: faker.name.findName(),
      address: faker.address.city(),
      company: faker.company.catchPhrase()
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.table);
  }

}
