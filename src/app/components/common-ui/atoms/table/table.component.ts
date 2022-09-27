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
  @Input() fields: TableFieldTemplate[] = [];
  @Input() elements: any[] = [];
  rendered_elements: string[][] = [];

  constructor() {}

  ngOnInit(): void {
    this.rendered_elements = this.elements.map((element) =>
      this.fields.map((field) => {
        console.log('######', element, field);
        return element[field.fieldName];
      })
    );
    console.log(this.rendered_elements, this.fields, this.elements, '&&', typeof this.elements);
  }
}
