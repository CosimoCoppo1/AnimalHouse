import { customAlert } from './customAlert.js'

function login()
{
	const form = $('#login-form');
	const action = '/auth/user/adminLogin';

	const email    = $('#email').val();
	const password = $('#password').val();
	const adminData = { 
			'email': email,
			'password': password
		};

	$.post(action, adminData)
	.then((res) => {
		window.localStorage.setItem('admin', JSON.stringify(res));
		const home = '/backoffice/home.html';
		$(location).attr('href', home);
	})
	.catch((err) => {
		customAlert(
			'Login fallito',
			'Email o password invalidi',
			undefined	
		);
	});
}
	

$(document).ready(() => {
	$('#login-form').submit((event) => {
		login();
		return false;
	});
});


