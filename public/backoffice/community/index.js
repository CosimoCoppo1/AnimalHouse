async function sendPost() {
	
	const text = $('#post-text').val();
	let image = $('#post-image')[0];

	const admin = JSON.parse(localStorage.getItem('admin'));

	const user =  admin.userId;

	let newPost = {
    	'user': user,
    	'desc': text
    };

	if (image.files.length > 0) {

		image = image.files[0];

		const imageData = new FormData();
		const fileName = Date.now() + image.name;
		imageData.append("name", fileName);
		imageData.append("file", image);


		try {
			await $.ajax({
				url: `/upload`,
				data: imageData,
				cache: false,
				contentType: false,
				processData: false,
				method: 'POST',
				type: 'POST', // For jQuery < 1.9
			});

      		newPost.image = fileName;
		}
		catch (err) {
			console.log(err);
		}

	}


	try {
		newPost = await $.post(`/posts`, newPost);
	}
	catch (err) {
		console.log(err);
		return;
	}

	newPost.user = {
		'username': admin.username,
		'email': admin.email,
		'role': admin.role,
		'_id': admin.userId
	};

	const p = $('#posts'); 
	p.html(createHtmlPost(newPost) + p.html());
}


function createHtmlPost(post)
{
	let innerHTML = '';

	let d = new Date(post.createdAt);
		let options = {
			'weekday': 'short', 
			'year': 'numeric', 
			'month': '2-digit', 
			'day': '2-digit'
		};
		let strDate = d.toLocaleDateString('it-IT', options);
			strDate = strDate.charAt(0).toUpperCase() + strDate.slice(1);
		let strTime = d.toLocaleTimeString('it-IT', { 'timeStyle': 'short' });

		innerHTML += ` 
			<div id="${post._id}" class="row justify-content-center py-3">
				<div class="card shadow bg-secondary" style="--bs-bg-opacity: .03; width: 45rem;">
					<div class="card-body">
						<div class="d-flex justify-content-between">
							<div>
								<div class="d-flex">
									<h2 class="card-title h5">${post.user.username}</h2>
									${post.user.role === 'admin' ?'<span class="px-1">-</span> <h2 class="card-title h5 text-danger fw-bold">Admin</h2>' : ''}
								</div>
								<h3 class="card-subtitle mb-2 text-muted h6">${post.user.email}</h3>
							</div>
							<div>
								${strDate} - <span>${strTime}</span>
							</div>
						</div>
						<hr>
						<p class="card-text px-2">
							${post.desc}
						</p>`;

			if (post.image !== undefined) {
				innerHTML += `
						<hr>
						<div class="p-3 d-flex justify-content-center">
							<img class="img-fluid" src="images/post/${post.image}" alt="">
						</div>`;
			}

		innerHTML += `
						<hr>
						<div class="d-flex justify-content-end">
							<button type="button" onclick="deletePost('${post._id}')" class="btn btn-sm btn-danger">Elimina</button>
						</div>
					</div>
				</div>	
			</div>`;

		return innerHTML;

}



function showPosts(posts)
{
	const p = $('#posts'); 
	let innerHTML = '';

	if (posts.length == 0) {
		innerHTML += `
			<h2 class="fw-bold text-secondary text-center h3">Nessun risultato...</h3>
			<p class="text-secondary text-center">
				Non ci sono posts disponibili.
			</p>`;
	}

	for (let i = 0; i < posts.length; i++) {
		innerHTML += createHtmlPost(posts[i]);
	}

	p.html(p.html() + innerHTML);

}

function deletePost(id)
{
	$.ajax({
		'url': `/posts/${id}`,
		'method': 'DELETE'
	})
	.then((res) => {
		$(`#${id}`).remove();
	})
	.catch((err) => {
		alert('Errore, eliminazione fallita');
	});
}

let before = (new Date(Date.now())).toISOString();
function getPosts()
{
	$.getJSON(`/posts?qty=3&before=${before}`, (posts) => { 
		if (posts.length === 0) {
			alert('Hai raggiunto l\'ultimo post');
			$('#carica-altro').prop('disabled', true);

			return;
		}
		before = posts[posts.length - 1].createdAt;
		showPosts(posts); 
	});
}

$(document).ready(() => {

	$('#new-post').submit((event) => {
		sendPost();
		return false;
	});

	getPosts();
});


