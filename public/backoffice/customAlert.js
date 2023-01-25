export function customAlert(title, text, backlink) 
{
	return $(
	`<div class="modal" tabindex="-1" role="alert">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h2 class="modal-title h3">${title}</h2>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${text}
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Chiudi</button>
					${backlink ? `<a href="${backlink}" role="button" class="btn border border-secondary border-2 btn-outline-secondary">Pagina precedente</a>` : ''}
				</div>
			</div>
		</div>
	</div>`).modal('show');;
}
