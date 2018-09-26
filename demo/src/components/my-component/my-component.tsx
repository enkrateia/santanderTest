import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, Wordsdsdsdsl! I'm {this.first} {this.last}
      </div>
    );
  }
}
