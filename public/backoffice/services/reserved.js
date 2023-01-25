import { customAlert } from '../customAlert.js'

function show_pet(pets)
{
	const s = $('#pet-select');
	let innerHTML = '<option value="All">Tutti gli animali</option>';

	for (let i = 0; i < pets.length; i++) {
		innerHTML += `<option value="${pets[i]._id}">${pets[i].name}</option>`;
	}
	s.html(innerHTML);
}


function show_pet_services_select()
{

	const pet = $('#pet-select').val();
	let innerHTML = '<option value="All">Tutti i servizi </option>';
	const sel = $('#service-select');

	if (pet === 'All') {
		sel.html(innerHTML);
		return;
	}

	$.getJSON(`/services?pet=${pet}`, 
		function (services)
		{
			for (let i = 0; i < services.length; i++) {
				innerHTML += `<option value="${services[i]._id}">${services[i].name}</option>`;
			}

			sel.html(innerHTML);
		});
}


function showLocationsSelect(locations)
{
	const sel = $('#location-select');
	let innerHTML = '<option value="All">Tutte le sedi</option>';

	for (let i = 0; i < locations.length; i++) {
		innerHTML += `<option value="${locations[i]._id}">${locations[i].city} - ${locations[i].address}</option>`;
	}
	sel.html(innerHTML);
}


async function getReservation()
{
	const form = $('#serch-form');
	const action = form.attr('action');

	const p = $('#pet-select option:selected').attr('value');
	const l = $('#location-select option:selected').attr('value');
	const s = $('#service-select option:selected').attr('value');
	const u = $('#user-email').val();

	let uri = `bookable_services/reservation`;
	let first = true;

	if (u !== '') {
		let user = await $.getJSON(`users?email=${u}`);

		if (user.length === 0) {
			customAlert(
				'Servizi prenotati',
				`L'email ${u} non <span class="text-danger">esiste</span>`,
				undefined
			);
			return;
		}

		uri += `?user=${user[0]._id}`;
		first = false
	}



	if (p !== 'All') {
		uri += `${first ? '?' : '&'}pet=${p}`;
		first = false;
	}
	if (l !== 'All') {
		uri += `${first ? '?' : '&'}location=${l}`;
		first = false;
	}
	if (s !== 'All') {
		uri += `${first ? '?' : '&'}service=${s}`;
		first = false;
	}
	$.getJSON(uri, (reservation) => { showSearchResult(reservation); });
}

function showSearchResult(results)
{
	const r = $('#search-result');
	let innerHTML = '';

	if (results.length == 0) {
		innerHTML += `
			<h2 class="fw-bold text-secondary text-center h3">Nessun risultato...</h2>
			<p class="text-secondary text-center">
				Non ci sono servizi prenotati per questa ricerca.
			</p>`;
	}
	else {
		innerHTML += `
			<h2 class="text-secondary h3">
				<span class="fw-bold">Servizi prenotati:</span>
			</h2>
		`;
	}

	for (let i = 0; i < results.length; i++) {

		let d = new Date(results[i].bookable_service.day);
		let options = {'weekday': 'short', 'year': 'numeric', 'month': '2-digit', 'day': '2-digit'};
		let strDate = d.toLocaleDateString('it-IT', options);
			strDate = strDate.charAt(0).toUpperCase() + strDate.slice(1);
		let strTime= d.toLocaleTimeString('it-IT', { 'timeStyle': 'short' });

		innerHTML += `
			<article class="border m-3">
				<div class="p-3">
					<div class="d-flex flex-column flex-lg-row gap-lg-3">
						<h3 class="fs-4 mb-0 h4">${results[i].bookable_service.service.name}</h3> 
						<div>sede: <span class="fs-5">${results[i].bookable_service.location.city}</span></div>
					</div>
					<div class="d-lg-flex flex-row justify-content-between">
						<div class="d-flex flex-column">
							<span class="fs-4 text-success fw-bold" style="margin-bottom: -10px;">${strTime}</span>
							<span>${strDate}</span> 
						</div>
						<div class="d-flex flex-column flex-md-row justify-content-between gap-1 gap-md-3">
							<div class="d-flex flex-column">
								<span class="fs-5 text-danger fw-bold text-lg-center" style="margin-bottom: -10px;">${results[i].user.username}</span>
								<span class="text-lg-center">${results[i].user.email}</span>
							</div>
							<div class="d-flex justify-content-end align-items-center">
								<button class="btn btn-sm btn-outline-secondary py-0" type="button" id="buttonMoreInfo-${i}"
									data-bs-toggle="collapse" data-bs-target="#collapseMoreInfo-${i}" 
									aria-expanded="false" aria-controls="collapseMoreInfo-${i}">
										più info
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="collapse" id="collapseMoreInfo-${i}">
					<div class="border-top bg-secondary p-3" style="--bs-bg-opacity: .10;">
						<h4 class="fs-4">Ulteriori informazioni</h4>
						<p>
							<span class="text-danger fw-bold">Attenzione:</span> Il servizio è disponibile soltanto per <span class="text-black fw-bold">${results[i].bookable_service.pet.name}</span> 
							di dimensione <span class="text-black fw-bold">${results[i].bookable_service.pet_size}</span> o minore. <br>
							Indirizzo della sede: <span class="text-black fw-bold">${results[i].bookable_service.location.address} - ${results[i].bookable_service.location.city}</span>
						</p>
						<p>
							<span class="text-success fw-bold">Descrizione del servizio:</span> <br> 
							${results[i].bookable_service.service.description}
						</p>
						<p>Posti prenotati: <span class="text-black fw-bold">${results[i].qty}</span></p>
						<div class="d-flex justify-content-end">
							<button class="ms-2 btn btn-outline-danger" onclick="delete_reservation('${results[i]._id}')"><span class="fw-bold">Elimina</span></button>
						</div>
					</div>
				</div>
			</article>`;
	}

	

	r.html(innerHTML);
}

function delete_reservation(id)
{	$.ajax({
			'url': `/bookable_services/reservation/${id}`,
			'method': 'DELETE'
	})
	.then((res) => {
		getReservation();
	})
	.catch((err) => {
		customAlert(
			'Servizi prenotati',
			'Errore, eliminazione <span class="text-danger">fallita</span>',
			undefined
		);
	});

}

	
$(document).ready(() => {
	$.getJSON('/pets', (pets) => { show_pet(pets); });
	$.getJSON('/locations', (locations) => { showLocationsSelect(locations); });
	
	$('#pet-select').change(show_pet_services_select);

	$('#search-form').submit((event) => {
		getReservation();
		return false;
	});
});


