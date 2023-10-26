export const promise = fetch('/src/server/data/products.json')
	.then(response => response.json())
	.then(data => {
		return data;
	})
	.catch(error => {
		console.log(error);
	});
