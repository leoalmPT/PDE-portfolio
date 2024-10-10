import { type Experience } from '../types';
import melecon from '../md/melecon.md?raw';
import bolsa from '../md/bolsa.md?raw';
import globecom from '../md/globecom.md?raw';
import hackathon from '../md/hackathon.md?raw';
import peci from '../md/peci.md?raw';

export const items: Array<Experience> = [
	{
		slug: 'hackathon',
		name: 'Hackathon - Aveiro TechWeek 2024',
		shortDescription: 'Winning team of the Aveiro TechWeek 2024 Hackathon - Altice Labs Challenge',
		date: new Date('2024-10-04'),
		description: hackathon,
		color: 'cyan',
		screenshots: [
			{ src: '/images/hackathon0.jpg', label: 'Overview' },
			{ src: '/images/hackathon1.jpg', label: 'Prize' },
		],
	},
	{
		slug: 'peci',
		name: 'Project supervision',
		shortDescription: 'Helping supervising of a final project for the LECI Bachelor\'s degree as part of the PECI subject',
		date: new Date('2024-09-27'),
		description: peci,
		color: 'violet',
	},
	{
		slug: 'globecom',
		name: 'GLOBECOM 2024',
		shortDescription: 'The paper "From Black Box to Transparency: Consistency and Cost within XAI" was accepted for presentation',
		date: new Date('2024-09-16'),
		description: globecom,
		color: 'yellow',
	},
	{
		slug: 'research',
		name: 'Research Grant',
		shortDescription: 'Research Grant at the University of Aveiro',
		date: new Date('2024-09-01'),
		description: bolsa,
		color: 'green',
	},
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
