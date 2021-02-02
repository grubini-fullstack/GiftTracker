import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  @Input() register: boolean;
  @Output() registryEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void { }
  onCancel() {
    this.registryEvent.emit(false);
  }

}
