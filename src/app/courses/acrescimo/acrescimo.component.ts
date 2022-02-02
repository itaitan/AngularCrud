import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acrescimo',
  templateUrl: './acrescimo.component.html',
  styleUrls: ['./acrescimo.component.scss'],
})
export class AcrescimoComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor() {}

  ngOnInit(): void {}
}
