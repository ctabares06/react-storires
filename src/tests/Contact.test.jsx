import { act, render, screen } from '@testing-library/react';
import Contact from '../pages/Home/Contact';
import userEvent from '@testing-library/user-event';

describe('component initial value', () => {
	test('component should render', () => {
		render(<Contact />);
		const form = screen.getByRole('form', { name: 'contact' });
		expect(form).toBeInTheDocument();
	});

	test('initial state', () => {
		render(<Contact />);
		const firstname = screen.getByRole('textbox', { name: 'Firstname' });
		const surname = screen.getByRole('textbox', { name: 'Surname' });
		const email = screen.getByRole('textbox', { name: 'Email' });
		const dataTreatment = screen.getByRole('checkbox', {
			name: 'datatreatmen',
		});
		const newsletter = screen.getByRole('checkbox', { name: 'newsletter' });
		const submitButton = screen.getByRole('button', { name: 'submit' });

		expect(firstname).toHaveValue('');
		expect(surname).toHaveValue('');
		expect(email).toHaveValue('');
		expect(dataTreatment).not.toBeChecked();
		expect(newsletter).not.toBeChecked();
		expect(submitButton).toBeDisabled();
	});
});

describe('inputs start to update', () => {
	test('insert in inputs and click on checkboxes', async () => {
		const user = userEvent.setup();
		render(<Contact />);
		const firstname = screen.getByRole('textbox', { name: 'Firstname' });
		const surname = screen.getByRole('textbox', { name: 'Surname' });
		const email = screen.getByRole('textbox', { name: 'Email' });
		const dataTreatment = screen.getByRole('checkbox', {
			name: 'datatreatmen',
		});
		const newsletter = screen.getByRole('checkbox', { name: 'newsletter' });
		const submitButton = screen.getByRole('button', { name: 'submit' });

		await act(async () => {
			await user.type(firstname, 'jhonatan');
			await user.type(surname, 'lezcano');
			await user.type(email, 'mail@gmail.com');
			await user.click(newsletter);
			await user.click(dataTreatment);
		});

		expect(firstname).toHaveValue('jhonatan');
		expect(surname).toHaveValue('lezcano');
		expect(email).toHaveValue('mail@gmail.com');
		expect(newsletter).toBeChecked();
		expect(dataTreatment).toBeChecked();
		expect(submitButton).toBeEnabled();
	});
});
