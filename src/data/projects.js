// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'BLANC POS SYSTEM',
		category: 'Web Application',
		route: '/projects/blanc-project',
		img: require('@/assets/images/blanc/blanc-stats.png'),
	},
	{
		id: 2,
		title: 'Semti CRM system',
		route: '/projects/semti-project',
		category: 'Web Application',
		img: require('@/assets/images/semti/home.png'),
	},
	{
		id: 3,
		title: 'Folkers & Costal CRM system',
		route: '/projects/hq-project',
		category: 'Web Application',
		img: require('@/assets/images/hq/dashboard.png'),
	},
	{
		id: 4,
		title: 'Email Ticket System',
		route: '/projects/ticket-project',
		category: 'Web Application',
		img: require('@/assets/images/ticket/dashboard.png'),
	},
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	category: 'UI/UX Design',
	// 	img: require('@/assets/images/ui-project-2.jpg'),
	// },
	// {
	// 	id: 5,
	// 	title: 'React Social App',
	// 	category: 'Mobile Application',
	// 	img: require('@/assets/images/mobile-project-1.jpg'),
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: require('@/assets/images/web-project-1.jpg'),
	// },
];

export default projects;
