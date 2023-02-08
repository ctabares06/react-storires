import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Checkbox,
	FormControlLabel,
	Stack,
	TextField,
	FormGroup,
	Paper,
	styled,
} from '@mui/material';
import { Box } from '@mui/system';
import Textfield from '../../components/Inputs/Textfield';
import Button from '../../components/Button';

export default function Contact({ submit }) {
	const [firstname, setFirstname] = useState('');
	const [surname, setSurname] = useState('');
	const [email, setEmail] = useState('');
	const [dataTreatment, setDataTreatment] = useState(false);
	const [newsletter, setNewsletter] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		submit(event);
	};

	const handleFirstname = (event) => {
		setFirstname(event.target.value);
	};

	const handleSurname = (event) => {
		setSurname(event.target.value);
	};

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handleDataTreatment = (event) => {
		setDataTreatment(event.target.checked);
	};

	const handleNewsletter = (event) => {
		setNewsletter(event.target.checked);
	};

	return (
		<Paper
			elevation={1}
			sx={(theme) => ({
				background: theme.palette.primary.main,
				color: theme.palette.primary.contrastText,
				padding: theme.spacing(2),
			})}
		>
			<form aria-label="contact" onSubmit={handleSubmit}>
				<Stack spacing={2}>
					<Textfield
						id="firstnameInput"
						value={firstname}
						onChange={handleFirstname}
						label="Firstname"
						variant="standard"
					/>
					<Textfield
						id="surnameInput"
						value={surname}
						onChange={handleSurname}
						label="Surname"
						variant="standard"
					/>
					<Textfield
						id="EmailInput"
						value={email}
						onChange={handleEmail}
						label="Email"
						variant="standard"
					/>
					<FormGroup>
						<FormControlLabel
							sx={{
								width: 'fit-content',
							}}
							control={
								<Checkbox
									checked={dataTreatment}
									onChange={handleDataTreatment}
									inputProps={{
										'aria-label': 'datatreatmen',
									}}
									color="secondary"
								/>
							}
							label={
								<span>
									accept data treatment policies{' '}
									<a href="#">terms and codition</a>
								</span>
							}
						/>
						<FormControlLabel
							sx={{
								width: 'fit-content',
							}}
							control={
								<Checkbox
									checked={newsletter}
									onChange={handleNewsletter}
									inputProps={{
										'aria-label': 'newsletter',
									}}
									color="secondary"
								/>
							}
							label={
								<span>
									suscribe to newsletter to get promotions and new incoming
									products
								</span>
							}
						/>
						<Button
							label="send"
							size="small"
							color="secondary"
							type="submit"
							aria-label="submit"
							variant="contained"
							sx={{
								maxWidth: '100px',
							}}
							disabled={!dataTreatment}
						/>
					</FormGroup>
				</Stack>
			</form>
		</Paper>
	);
}

Contact.propTypes = {
	submit: PropTypes.func,
};

Contact.defaultProps = {
	submit: () => {},
};
