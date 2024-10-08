import { type Experience } from '../types';
import melecon from '../md/melecon.md?raw';

export const items: Array<Experience> = [
	{
		slug: 'melecon',
		name: 'IEEE Melecon 2024',
		shortDescription: 'Presentation of the paper "Privacy-Preserving Defense: Intrusion Detection in IoT using Federated Learning"',
		date: new Date('2024-06-27'),
		description: melecon,
		color: 'blue',
		screenshots: [
			{ src: '/images/melecon0.jpg', label: 'Conference' },
			{ src: '/images/melecon1.jpg', label: 'Presentation' },
		],
	}
];

export const title = 'Activities';
