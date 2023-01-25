import { customAlert } from '../customAlert.js'


function createNewUser()
{
	const username = $('#username').val();
	const email = $('#email').val();
	const password = $('#password').val();

	const userData = {
		'username': username,
		'email': email,
		'password': password
	};

	$.post(`/auth/user/register`, userData)
	.then((res) => {
		customAlert(
			'Registrazione nuovo utente',
			'<p>Utente registrato con <span class="text-success fw-bold">successo</span>.</p>',
			'backoffice/users/'
		)
	})
	.catch((err) => {
		customAlert(
			'Registrazione nuovo utente',
			'<p>Registrazione utente <span class="text-danger fw-bold">fallita</span>.</p>',
			'backoffice/users/'
		)
	});

}

$(document).ready(() => {

	$('#user-form').submit((event) => {
		createNewUser();
		return false;
	});

});

