import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  template: `
    <div>
      <h3>List Item:</h3>
      <pre>{{ newObject | json }}</pre>
    </div>
  `,
})
class ItemListComponent {
  @Input() newObject!: Record<string, unknown>;
}

export { ItemListComponent };
