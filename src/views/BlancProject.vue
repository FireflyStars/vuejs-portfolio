<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';

export default {
	name: 'BlancProject',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'BLANC POS SYSTEM',
				singleProjectDate: 'Jan 26, 2024',
				singleProjectTag: 'POS',
			},
			projectImages: [
				{
					id: 1,
					title: 'BLANC POS SYSTEM',
					img: require('@/assets/images/blanc/logistic.png'),
				},
				{
					id: 2,
					title: 'BLANC POS SYSTEM',
					img: require('@/assets/images/blanc/logistic-detail.png'),
				},
				{
					id: 3,
					title: 'BLANC POS SYSTEM',
					img: require('@/assets/images/blanc/production-track.png'),
				},
			],
			projectInfo: {
				clientHeading: 'About Client',
				companyInfos: [
					// {
					// 	id: 1,
					// 	title: 'Name',
					// 	details: 'Company Ltd',
					// },
					// {
					// 	id: 2,
					// 	title: 'Services',
					// 	details: 'UI Design & Frontend Development',
					// },
					{
						id: 3,
						title: 'Website',
						details: 'https://fullcirclepos.co.uk',
					},
					// {
					// 	id: 4,
					// 	title: 'Phone',
					// 	details: '555 8888 888',
					// },
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'The Point of Sale (POS) System is designed to streamline and enhance the retail transaction process by providing an efficient and user-friendly platform for sales transactions, inventory management, and customer relationship management. The goal is to improve the operational efficiency of retail businesses, enhance the customer experience, and provide valuable insights into sales data.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Vue.JS',
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
							'Streamline Sales Transactions: Facilitate quick and accurate processing of sales transactions.',
					},
					{
						id: 2,
						details:
							'Inventory Management: Maintain real-time tracking of inventory levels, stock management, and order processing.',
					},
					{
						id: 3,
						details:
							'Customer Relationship Management: Enhance customer engagement and loyalty through personalized services.',
					},
					{
						id: 4,
						details:
							'Data Insights: Provide actionable insights through detailed sales reports and analytics.',
					},
					{
						id: 5,
						details:
							'Integration: Ensure seamless integration with existing business systems and third-party applications.',
					},
					{
						id: 6,
						details:
							'Report: Useful Reports in various format namely Xlxs, Csv, and PDF',
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
