const { renderComponent, find } = require('react-visual-code');
const MyComponent = require('../src/components/MyComponent');

describe('MyComponent', () => {
    it('renders correctly', () => {
      const component = renderComponent(MyComponent);
      const element = find(component, '.my-component');
      expect(element).toBeTruthy();
    });
  });