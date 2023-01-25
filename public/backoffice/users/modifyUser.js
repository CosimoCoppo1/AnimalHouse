import { customAlert } from '../customAlert.js'

function modifyUser(userId)
{
	const username = $('#username').val();
	const email = $('#email').val();
	const password = $('#password').val();
	
	const userData = {
		'username': username,
		'email': email,
	};

	if (password !== '') {
		userData['password'] = password;
	}

	$.post(`/users/${userId}/modify`, userData)
	.then((res) => {
		customAlert(
			'Modifica utente', 
			'<p>Utente modificato con <span class="text-success">successo</span>.</p>',
			'backoffice/users/'
		)
	})
	.catch((err) => {
		customAlert(
			'Modifica utente', 
			'<p>Modifica utente <span class="text-danger">fallita</span>.</p>',
			'backoffice/users/'
		)
	});

}




function initForm(user)
{
	$('#username').val(user.username);
	$('#email').val(user.email);
}

function userIdErorr(userId)
{
	let innerHTML = `
	<h3 class="fw-bold text-secondary text-center">Nessun risultato...</h3>
	<p class="text-secondary text-center">
		Non esiste nessun utente registrato con id: ${userId}.
	</p>`;

	$('#userId-error').html(innerHTML);
}

let userId = getUrlParameter('id');
$(document).ready(() => {

	$.getJSON(`/users?id=${userId}`,
		function (users) {
			if (users.length > 0) initForm(users[0]);
			else userIdError(userId);
		});
	
	$('#user-form').submit((event) => {
		modifyUser(userId);
		return false;
	});

});
	
function getUrlParameter(sParam)
{
	let sPageURL = window.location.search.substring(1);
	let sURLVariables = sPageURL.split('&');

	for (let i = 0; i < sURLVariables.length; i++) {
		let sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1];
		}
	}
}
