import { render } from '@testing-library/react';
import App from './App';

test('Have to be element with class app', () => {
    const { container } = render(<App />);
    expect(container?.firstChild).toHaveClass('app');
});
