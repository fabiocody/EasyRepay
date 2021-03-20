import {Component, Input, OnInit} from '@angular/core';
import {PersonDto} from '../../../model/dto/person-dto';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() public person: PersonDto = {
    id: 0,
    name: '',
    count: 0,
    total: 0,
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
