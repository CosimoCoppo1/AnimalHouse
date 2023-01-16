
function invertArrow(btn)
{
	/*
	const text = btn.innerText;
	console.log(btn);
	console.log(text);

	if (text === '▼') btn.inenrText = ▲;
	else if (text === '▲') btn.inenrText = ▼;
	*/
}


function showPetsRadio(pets)
{
	const r = $('#pets-radio');
	let innerHTML = '';

	for (let i = 0; i < pets.length; i++) {
		innerHTML += `
		<div class="form-check form-check-inline">
			<input type="radio" class="form-check-input" name="pet" 
			id="${pets[i].name}" value="${pets[i]._id}" autocomplete="off" required>
			<label class="form-check-label" for="${pets[i].name}">${pets[i].name}</label>
		</div>`;
	}
	r.html(innerHTML);

	$('input[type="radio"][name="pet"]').click(() => { show_pet_services_select(); });
}


function show_pet_services_select()
{
	const pet = $('input[type="radio"][name="pet"]:checked').attr('value');
	$.getJSON(`/services?pet=${pet}`, 
		function (services)
		{
			const sel = $('#service-select');
			let innerHTML = '<option value="All">Tutti i servizi </option>';

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


function getBookable_service()
{
	const form = $('#serch-form');
	const action = form.attr('action');

	const p = $('input[type="radio"][name="pet"]:checked').attr('value');
	const l = $('#location-select option:selected').attr('value');
	const s = $('#service-select option:selected').attr('value');

	let uri = `/bookable_services?pet=${p}`;
	if (l !== 'All') uri += `&location=${l}`;
	if (s !== 'All') uri += `&service=${s}`;
	$.getJSON(uri, (services) => { showSearchResult(services);});
}

function showSearchResult(results)
{
	const r = $('#search-result');
	let innerHTML = '';

	if (results.length == 0) {
		innerHTML += `
			<h2 class="fw-bold text-secondary text-center h3">Nessun risultato...</h2>
			<p class="text-secondary text-center">
				Non ci sono servizi disponibili per questa ricerca.
			</p>`;
	}
	else {
		innerHTML += `
			<h2 class="text-secondary h3">
				<span class="fw-bold">Servizi disponibili:</span>
			</h2>
		`;
	}

	for (let i = 0; i < results.length; i++) {

		let d = new Date(results[i].day);
		let options = {'weekday': 'short', 'year': 'numeric', 'month': '2-digit', 'day': '2-digit'};
		let strDate = d.toLocaleDateString('it-IT', options);
			strDate = strDate.charAt(0).toUpperCase() + strDate.slice(1);
		let strTime= d.toLocaleTimeString('it-IT', { 'timeStyle': 'short' });

		innerHTML += `
			<article class="border m-3">
				<div class="p-3">
					<div class="d-flex flex-column flex-lg-row gap-lg-3">
						<h3 class="fs-4 mb-0 h4">${results[i].service.name}</h3> 
						<div>sede: <span class="fs-5">${results[i].location.city}</span></div>
					</div>
					<div class="d-flex justify-content-between">
						<div class="d-flex flex-column">
							<span class="fs-4 text-success fw-bold" style="margin-bottom: -10px;">${strTime}</span>
							<span>${strDate}</span> 
						</div>
						<div>
							<span class="fs-4 text-danger fw-bold">${results[i].price} €</span>
							<span>
								<button class="btn btn-sm" type="button" onclick="invertArrow(this)"
									data-bs-toggle="collapse" data-bs-target="#collapseMoreInfo-${i}" 
									aria-expanded="false" aria-controls="collapseMoreInfo-${i}">
										&#9660
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="collapse" id="collapseMoreInfo-${i}">
					<div class="border-top bg-secondary p-3" style="--bs-bg-opacity: .10;">
						<h4 class="fs-4">Ulteriori informazioni</h4>
						<p>
							<span class="text-danger fw-bold">Attenzione:</span> Il servizio è disponibile soltanto per <span class="text-black fw-bold">${results[i].pet.name}</span> 
							di dimensione <span class="text-black fw-bold">${results[i].pet_size}</span> o minore. <br>
							Indirizzo della sede: <span class="text-black fw-bold">${results[i].location.address} - ${results[i].location.city}</span>
						</p>
						<p>
							<span class="text-success fw-bold">Descrizione del servizio:</span> <br> 
							${results[i].service.description}
						</p>
						<p>Posti disponibili: <span class="text-black fw-bold">${results[i].reservation_left}</span></p>
						<div class="d-flex justify-content-end">
							<a role="button" class="btn btn-outline-success" href="backoffice/services/${results[i]._id}/modify"><span class="fw-bold">Modifica</span></a>
							<button class="ms-2 btn btn-outline-danger" onclick="deleteBookableService('${results[i]._id}')"><span class="fw-bold">Elimina</span></button>
						</div>
					</div>
				</div>
			</article>`;
	}

	

	r.html(innerHTML);
}

function deleteBookableService(id)
{	$.ajax({
			'url': `/bookable_services/${id}`,
			'method': 'DELETE'
	})
	.then((res) => {
		getBookable_service();
	})
	.catch((err) => {
		alert('Errore, eliminazione fallita');
	});

}

	
$(document).ready(() => {
	$.getJSON('/pets', (pets) => { showPetsRadio(pets); });
	$.getJSON('/locations', (locations) => { showLocationsSelect(locations); });
	

	$('#search-form').submit((event) => {
		getBookable_service();
		return false;
	});
});


