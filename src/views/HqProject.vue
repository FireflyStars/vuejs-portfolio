<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';

export default {
	name: 'HqProject',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Folkers & Costal CRM SYSTEM',
				singleProjectDate: 'Oct 20, 2021',
				singleProjectTag: 'CRM',
			},
			projectImages: [
				{
					id: 1,
					title: 'Folkers & Costal CRM SYSTEM',
					img: require('@/assets/images/hq/dashboard.png'),
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
					'The CRM (Customer Relationship Management) System is tailored specifically for companies specializing in windows and kitchen installations. This advanced system aims to streamline client interactions, manage project timelines, and enhance overall customer satisfaction. By integrating all aspects of customer management into a single platform, the CRM system will support the business in optimizing operations, improving communication, and driving growth.',
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
							'Consolidation of Data: Aggregate all customer information, including contact details, purchase history, preferences, and communication logs, into a single, easily accessible database.',
					},
					{
						id: 2,
						details:
							'Efficient Scheduling: Streamline the scheduling of installation projects, ensuring optimal use of resources and minimizing downtime.',
					},
					{
						id: 3,
						details:
							'Resource Allocation: Effectively manage and allocate materials, labor, and other resources to ensure projects are completed on time and within budget.',
					},
					{
						id: 4,
						details:
							'Milestone Management: Track key milestones and deadlines to ensure timely project completion and high-quality service delivery.',
					},
					{
						id: 5,
						details:
							'Customer Portal: Provide a dedicated portal where customers can track the progress of their projects, view updates, and communicate directly with the company.',
					},
					{
						id: 6,
						details:
							'Automated Notifications: Send automated email and SMS notifications to keep customers informed about appointment schedules, project updates, and other important information.',
					},
					{
						id: 7,
						details:
							'Implemented E-Sign feature with HelloSign.',
					},
					{
						id: 7,
						details:
							'Integrated the Intuite QuickBook',
					},
				],
				// socialSharingsHeading: 'Share This',
				// socialSharings: [
				// 	{
				// 		id: 4,
				// 		name: 'LinkedIn',
				// 		icon: 'linkedin',
				// 		url: 'https://linkedin.com/',
				// 	},
				// ],
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
