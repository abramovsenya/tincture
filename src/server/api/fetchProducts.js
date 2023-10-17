export async function fetchProducts() {
	try {
		const response = await fetch('/src/server/data/products.json');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Ошибка при получении данных о продуктах:', error);
		throw error;
	}
}
