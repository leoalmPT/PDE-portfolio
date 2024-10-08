import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Leonardo';

export const lastName = 'Almeida';

export const description =
	'I have always had a passion for learning new things, with a particular interest in computer science and technology. I have a perfectionist mindset, which makes me pay attention to every detail and ensure that my work meets the standards of quality expected. I take my commitments seriously and always strive to deliver projects on time. \n' +
	'I am a motivated and enthusiastic individual who is eager to contribute with my skills and knowledge in the field of computer science and engineering. I am constantly seeking new challenges and opportunities to expand my expertise, I find genuine enjoyment in what I do, and I look forward to use my abilities to make a meaningful impact in the industry.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub, 
		link: 'https://github.com/leoalmPT' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/leoalmpt/'
	},
	{
		platform: Platform.Email,
		link: 'leonardoalmeida7777@gmail.com'
	},
];

export const skills = undefined;
