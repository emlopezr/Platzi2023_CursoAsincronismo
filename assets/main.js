// Etiqueta HTML a insertar
const content = document.querySelector('#content');

// Usando RapidAPI
const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC5JqJNuMFEOsHmiVNPrHZGQ&part=snippet%2Cid&order=date&maxResults=8";

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "3b234dc694msh045b3d7ab847d97p153cf8jsn22f9001849a4",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

// Función asíncrona para llamar a la API
const getVideos = async (urlApi) => {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
};

// Debugging
(async () => {
	const videos = await getVideos(API);
	console.log(videos.items[0].id.videoId)
})();

// Función que se llama a sí misma para insertar el contenido
(async () => {
    try {
        const videos = await getVideos(API);

		// Crear el HTML para cada vídeo de los obtenidos
        let htmlVideos = videos.items.map(video => {
                return `
				<a href="https://www.youtube.com/watch?v=${video.id.videoId}"
					<div class="group relative">
						<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
							<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
						</div>
						<div class="mt-4 flex justify-between">
							<h3 class="text-sm text-gray-700">
								<span aria-hidden="true" class="absolute inset-0"></span>
								${video.snippet.title}
							</h3>
						</div>
					</div>
				</a>`
            }).join('')

		// Insertarlos en el HTML
		content.innerHTML = htmlVideos

    } catch (error) {
		console.log(error)
	}
})();
