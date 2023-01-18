function showUsers(users)
{
	const ul = $('#user-list');
	let innerHTML = '';

	if (users.length == 0) {
		innerHTML += `
			<h2 class="fw-bold text-secondary text-center h3">Nessun risultato...</h2>
			<p class="text-secondary text-center">
				Non ci sono utenti registrati che soddisfano i parametri di ricerca.
			</p>`;
	}
	else {
		innerHTML += `
			<h2 class="text-secondary h3">
				<span class="fw-bold">Utenti registrati:</span>
			</h2>
		`;
	}

	for (let i = 0; i < users.length; i++) {
		innerHTML += `
			<article id="article-${users[i]._id}" class="py-3">
				<div class="border border-dark border-1 bg-secondary p-1 px-2 d-flex justify-content-between" style="--bs-bg-opacity: .15;">
					<div>
						<span class="fw-bold">Id:</span> ${users[i]._id} 
					</div>
					<div>
						<a role="button" href="backoffice/users/modifyUser.html?id=${users[i]._id}" class="btn btn-outline-success btn-sm py-0" aria-label="Modifica utente ${users[i].email}">
							Modifica
							<img src="backoffice/img/icons8-edit-32.png" height="16" alt="Modifica utente corrente">
						</a>
						<button role="button" onclick="deleteUser('${users[i]._id}')" class="btn btn-outline-danger btn-sm py-0" aria-label="Elimina utente ${users[i].email}">
							Elimina
							<img src="backoffice/img/trash-9-32.png" height="16" alt="">
						</button>
					</div>
				</div>
				<div class="border border-secondary border-1 border-top-0 rounded-bottom p-2">
					<div><span class="fw-bold text-success">Nome utente:</span> ${users[i].username}</div>
					<div><span class="fw-bold text-success">Email:</span> ${users[i].email}</div>
				</div>
			</article>`;
	}

	ul.html(innerHTML);


}

function deleteUser(userId)
{
	$.ajax({
		'url': `/users/${userId}`,
		'method': 'DELETE',
	})
	.then((res) => {
		$(`#article-${userId}`).remove();
	})
	.catch((err) => {
		console.error(err);
	})
}

$(document).ready(() => {
	$('#search-form').submit((event) => {

		let u = $('#username').val();
		let e = $('#user-email').val();

		let uri = '/users';
		let first = true;

		if (u !== '') {
			uri += `${first ? '?' : '&'}username=${u}`;
			first = false;
		}
		if (e !== '') {
			uri += `${first ? '?' : '&'}email=${e}`;
			first = false;
		}

		$.getJSON(uri, (users) => { showUsers(users); });
		return false;
	});


});

