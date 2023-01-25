import { customAlert } from '../customAlert.js'


function show_pet_services_select()
{
	const pet = $('#pet-select > option:checked').attr('value');
	$.getJSON(`/services?pet=${pet}`, 
		function (services)
		{
			const sel = $('#service-select');
			let innerHTML = '<option value="" selected disasble hidden>-- Scegli il servizio --</option>';

			for (let i = 0; i < services.length; i++) {
				innerHTML += `<option value="${services[i]._id}">${services[i].name}</option>`;
			}

			sel.html(innerHTML);
		});
}

function updateService()
{
	const f = $('#modify-form');
	const pet = $('#pet-select > option:selected').val();
	const service = $('#service-select > option:selected').val();
	const location = $('#location-select > option:selected').val();
	const price = $('#modify-price').val();
	const reservation_left = $('#modify-reservation-left').val();
	const pet_size = $('#pet-size-select > option:selected').val();

	const date = $('#modify-date').val(); /* parsed by the browser in UTC format */
	const time = $('#modify-time').val(); /* 24-hour format hh:mm */
	const utcDate = new Date(date + 'T' + time).toISOString();

	const serviceData = {
		'pet': pet,
		'service': service,
		'location': location,
		'price': price,
		'reservation_left': reservation_left,
		'pet_size': pet_size,
		'day': utcDate
	};

	$.post(`/${f.attr('action')}`, serviceData)
	.then((res) => {
		customAlert(
			'Servizi prenotabili',
			'Servizio creato con <span class="text-success">successo</span>',
			'backoffice/services/'
		);
	})
	.catch((err) => {
		customAlert(
			'Servizi prenotabili',
			'Creazione servizio <span class="text-danger">fallita</span>',
			'backoffice/services/'
		);
	});

}

$(document).ready(() => {
	$('#pet-select').change(show_pet_services_select);
	$('#modify-form').submit((event) => {
		updateService();
		return false;
	});
});
	
