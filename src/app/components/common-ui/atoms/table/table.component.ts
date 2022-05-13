import { Component, Input, OnInit } from '@angular/core';

export interface TableFieldTemplate {
  title: string;
  fieldName: string;

  fieldType?: 'text' | 'image';
  alignment?: 'center' | 'left';
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() headers: TableFieldTemplate[] = [];
  @Input() rows: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
