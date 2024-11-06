import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
	it('renders headline', () => {
		const title = 'React + Vite test title';
		render(<App title={title}/>);

		const screenTitle = screen.getByText(title);

		expect(screenTitle).toBeInTheDocument();
	});
});