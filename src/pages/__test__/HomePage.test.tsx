import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

import HomePage from "../HomePage.tsx";

describe("HomePage", () => {
	it('should increment counter on click', async () => {
		const { getByRole } = render(<HomePage/>);
		const user = userEvent.setup();

		const getButton = () => getByRole('button');
		const getCount = () => Number(getButton().innerHTML?.replace('count is', '').trim());

		const initCount = getCount();

		await user.click(getButton());

		expect(getCount()).toBe(initCount + 1);
	});
});