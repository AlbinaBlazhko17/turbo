const apiKey = 'a1427724a87c4c7db63eef6aff4f7e4c';

export const getTopNews = async () => {
	try {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&q=business&domains=wsj.com&apiKey=${apiKey}`,
		);
		const data = await response.json();
		return data.articles;
	} catch (error) {
		console.log(error);
	}
};

export const getRecentNews = async () => {
	try {
		const response = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`);
		const data = await response.json();
		return data.articles;
	} catch (error) {
		console.log(error);
	}
};

// const dataForNews: IDataForAside[] = [
// 	{
// 		id: 1,
// 		img: AsideImg,
// 		header: 'Financial updates',
// 		text: 'It is a long established fact that a reader will be distracted by...',
// 	},
// 	{
// 		id: 2,
// 		img: AsideImg,
// 		header: 'Financial updates',
// 		text: 'It is a long established fact that a reader will be distracted by...',
// 	},
// 	{
// 		id: 3,
// 		img: AsideImg,
// 		header: 'Financial updates',
// 		text: 'It is a long established fact that a reader will be distracted by...',
// 	},
// 	{
// 		id: 4,
// 		img: AsideImg,
// 		header: 'Financial updates',
// 		text: 'It is a long established fact that a reader will be distracted by...',
// 	},
// 	{
// 		id: 5,
// 		img: AsideImg,
// 		header: 'Financial updates',
// 		text: 'It is a long established fact that a reader will be distracted by...',
// 	},
// 	{
// 		id: 6,
// 		img: AsideImg,
// 		header: 'Financial updates',
// 		text: 'It is a long established fact that a reader will be distracted by...',
// 	},
// 	{
// 		id: 7,
// 		img: AsideImg,
// 		header: 'Financial updates',
// 		text: 'It is a long established fact that a reader will be distracted by...',
// 	},
// ];

// export default dataForNews;
