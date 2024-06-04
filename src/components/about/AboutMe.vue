<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I have been working in the software development field for the past 6 years, with a primary focus on web development using PHP(Laravel), Node, Python, and Vue.js. Throughout my career, I\'ve had the privilege of working on various projects that have allowed me to refine my skills and gain valuable experience in both backend and frontend development.',
				},
				{
					id: 2,
					bio:
						'My strengths lie in my ability to effectively translate project requirements into efficient and scalable code, as well as my strong problem-solving skills when faced with complex challenges. I\'m well-versed in utilizing Laravel\'s features such as routing, authentication, and Eloquent ORM to build secure and maintainable backend systems. On the frontend side, I have extensive experience in developing dynamic and responsive user interfaces using Vue.js components and state management libraries like Vuex and Pinia.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
