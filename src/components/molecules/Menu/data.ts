import type { ILink } from "../../atoms/Link/interfaces"

export const defaultLinks: ILink[] = [
	{
		href: '/',
		text: '/',
		additionalClasses: 'px-2'
	},
	{
		href: '/blog',
		text: 'Blog'
	},
	{
		href: '/projects',
		text: 'Projects'
	},
	{
		href: '/contact',
		text: 'Contact'
	},
	{
		href: '/about-me',
		text: 'About me'
	}
]