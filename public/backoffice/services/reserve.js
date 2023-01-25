import { customAlert } from '../customAlert.js'

async function reserve(bookable_service_id)
{
	const email = $('#email').val();
	const qty = $('#qty').val();

	let user = await $.getJSON(`users?email=${email}`);

	if (user.length === 0) {
		customAlert(
			'Prenotazione servizio',
			`Prenotazione <span class="text-danger">fallita</span>, L'email ${email} non esiste`,
			'backoffice/services/'
		);
		return;
	}

	const reservation = {
		'user': user[0]._id,
		'bookable_service': bookable_service_id, 
		'qty': qty
	};

	$.post(`bookable_services/reservation`, reservation)
	.then((res) => {
		if (!res.reservationResult) {
			throw new Error('Prenotazione fallita');
		}
		customAlert(
			'Prenotazione servizio',
			'Prenotazione effettuata con <span class="text-success">successo</span>',
			'backoffice/services/'
		);
	})
	.catch((err) => {
		customAlert(
			'Prenotazione servizio',
			'Prenotazione <span class="text-danger">fallita</span>',
			'backoffice/services/'
		);
	});

}

function show_bookable_services(service)
{

	let d = new Date(service.day);
	let options = {
		'weekday': 'short', 
		'year': 'numeric', 
		'month': '2-digit', 
		'day': '2-digit'
	};
	let strDate = d.toLocaleDateString('it-IT', options);
		strDate = strDate.charAt(0).toUpperCase() + strDate.slice(1);
	let strTime = d.toLocaleTimeString('it-IT', { 'timeStyle': 'short' });


	let innerHTML = `
		<article>
			<div class="d-flex flex-column flex-lg-row gap-lg-3">
				<h3 class="fs-4 mb-0 h4">${service.service.name}</h3> 
				<div>sede: <span class="fs-5">${service.location.city}</span></div>
			</div>
			<div class="d-flex justify-content-between">
				<div class="d-flex flex-column">
					<span class="fs-4 text-success fw-bold" style="margin-bottom: -10px;">${strTime}</span>
					<span>${strDate}</span> 
				</div>
				<div>
					<span class="fs-4 text-danger fw-bold">${service.price} €</span>
				</div>
			</div>
			<div class="border-top bg-secondary p-3 mt-3" style="--bs-bg-opacity: .10;">
				<h4 class="fs-4">Ulteriori informazioni</h4>
				<p>
					<span class="text-danger fw-bold">Attenzione:</span> Il servizio è disponibile soltanto per <span class="text-black fw-bold">${service.pet.name}</span> 
					di dimensione <span class="text-black fw-bold">${service.pet_size}</span> o minore. <br>
					Indirizzo della sede: <span class="text-black fw-bold">${service.location.address} - ${service.location.city}</span>
				</p>
				<p>
					<span class="text-success fw-bold">Descrizione del servizio:</span> <br> 
					${service.service.description}
				</p>
				<p>Posti disponibili: <span class="text-black fw-bold">${service.reservation_left}</span></p>
			</div>
		</article>`;	
	$('#service-recap').html(innerHTML);
	
}


function bookable_service_id_error(id)
{
	let innerHTML = `
	<h3 class="fw-bold text-secondary text-center">Nessun risultato...</h3>
	<p class="text-secondary text-center">
		Non esiste nessun servizio prenotabile con id: ${id}.
	</p>`;
	$('#bookable-service-id-error').html(innerHTML);
}

let bookable_service_id  = getUrlParameter('id');
$(document).ready(() => {

	$.getJSON(`bookable_services?id=${bookable_service_id}`,
		function (services) {
			if (services.length > 0) show_bookable_services(services[0]);
			else bookable_service_id_error(bookable_service_id);
		})
	.fail(() => { bookable_service_id_error(bookable_service_id) } );
	
	$('#reserve-form').submit((event) => {
		reserve(bookable_service_id);
		return false;
	});

});
	
function getUrlParameter(sParam)
{
	let sPageURL = window.location.search.substring(1)
	let sURLVariables = sPageURL.split('&');

	for (let i = 0; i < sURLVariables.length; i++) {
		let sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1];
		}
	}
}
