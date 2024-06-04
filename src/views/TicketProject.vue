<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';

export default {
	name: 'TicketProject',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Email Ticket SYSTEM',
				singleProjectDate: 'Jun 20, 2022',
				singleProjectTag: 'Web App',
			},
			projectImages: [
				{
					id: 1,
					title: 'Email Ticket SYSTEM',
					img: require('@/assets/images/ticket/dashboard.png'),
				},
			],
			projectInfo: {
				// clientHeading: 'About Client',
				// companyInfos: [
				// 	// {
				// 	// 	id: 1,
				// 	// 	title: 'Name',
				// 	// 	details: 'Company Ltd',
				// 	// },
				// 	// {
				// 	// 	id: 2,
				// 	// 	title: 'Services',
				// 	// 	details: 'UI Design & Frontend Development',
				// 	// },
				// 	{
				// 		id: 3,
				// 		title: 'Website',
				// 		details: 'https://fullcirclepos.co.uk',
				// 	},
				// 	// {
				// 	// 	id: 4,
				// 	// 	title: 'Phone',
				// 	// 	details: '555 8888 888',
				// 	// },
				// ],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'The Email Ticket System is designed to streamline and enhance customer support operations by automating the process of handling incoming emails. This system will convert customer emails into trackable tickets, allowing support teams to efficiently manage, prioritize, and resolve inquiries. The goal is to improve response times, ensure accountability, and provide a better overall customer experience.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'JQuery',
							'Laravel',
							'MySQL',
						],
					},
				],
				projectDetailsHeading: 'Key Features',
				projectDetails: [
					{
						id: 1,
						details:
							'Automate Ticket Creation: Automatically generate tickets from incoming customer emails, categorizing and prioritizing them based on predefined rules.',
					},
					{
						id: 2,
						details:
							'Centralize Support Requests: Maintain a centralized database of all customer inquiries for easy access, tracking, and management.',
					},
					{
						id: 3,
						details:
							'Improve Response Times: Enable faster response and resolution times by organizing and prioritizing tickets effectively.',
					},
					{
						id: 4,
						details:
							'Enhance Customer Satisfaction: Provide timely and accurate responses to customer queries, improving their experience and satisfaction.',
					},
					{
						id: 5,
						details:
							'Facilitate Collaboration: Allow support team members to collaborate on tickets, ensuring that issues are resolved efficiently.',
					},
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
				],
			},
			// relatedProject: {
			// 	relatedProjectsHeading: 'Related Projects',
			// 	relatedProjects: [
			// 		{
			// 			id: 1,
			// 			title: 'Mobile UI',
			// 			img: require('@/assets/images/mobile-project-1.jpg'),
			// 		},
			// 		{
			// 			id: 2,
			// 			title: 'Web Application',
			// 			img: require('@/assets/images/web-project-1.jpg'),
			// 		},
			// 		{
			// 			id: 3,
			// 			title: 'UI Design',
			// 			img: require('@/assets/images/ui-project-2.jpg'),
			// 		},
			// 		{
			// 			id: 4,
			// 			title: 'Kabul Mobile App UI',
			// 			img: require('@/assets/images/mobile-project-2.jpg'),
			// 		},
			// 	],
			// },
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
	</div>
</template>

<style scoped></style>
