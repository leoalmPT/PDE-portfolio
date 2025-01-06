import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Links', slug: 'links' }),
	defineSkillCategory({ name: 'Files', slug: 'files' }),
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'portfolio',
		color: 'yellow',
		description: '',
		logo: Assets.Github,
		name: 'Portfolio',
		category: 'links',
		url: 'https://github.com/leoalmPT/PDE-portfolio',
	}),
	defineSkill({
		slug: 'fl',
		color: 'blue',
		description: '',
		logo: Assets.Github,
		name: 'Federated Learning',
		category: 'links',
		url: 'https://github.com/leoalmPT/FL_Benchmark',
	}),
	defineSkill({
		slug: 'proposal',
		color: 'red',
		description: '',
		logo: Assets.PDF,
		name: 'Proposal',
		category: 'files',
		url: '/files/proposal.pdf',
	}),
	defineSkill({
		slug: 'sprint1',
		color: 'violet',
		description: '',
		logo: Assets.PDF,
		name: 'Sprint 1',
		category: 'files',
		url: '/files/sprint1.pdf',
	}),
	defineSkill({
		slug: 'sprint2',
		color: 'salmon',
		description: '',
		logo: Assets.PDF,
		name: 'Sprint 2',
		category: 'files',
		url: '/files/sprint2.pdf',
	}),
	defineSkill({
		slug: 'sprint3',
		color: 'orangered',
		description: '',
		logo: Assets.PDF,
		name: 'Sprint 3',
		category: 'files',
		url: '/files/sprint3.pdf',
	}),
	defineSkill({
		slug: 'sprint4',
		color: 'rosybrown',
		description: '',
		logo: Assets.PDF,
		name: 'Sprint 4',
		category: 'files',
		url: '/files/sprint4.pdf',
	}),
] as const;

export const title = 'Resources';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
