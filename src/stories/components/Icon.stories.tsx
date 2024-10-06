import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@components/common';
import { COLORS, ICON_NAMES } from '../constants';

const meta: Meta<typeof Icon> = {
	title: 'Components/Icon',
	component: Icon,
	argTypes: {
		color: {
			control: 'select',
			options: COLORS
		},
		name: {
			control: 'select',
			options: ICON_NAMES
		}
	},
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	decorators: Story => (
		<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
			<Story />
		</div>
	)
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconStory: Story = {
	args: {
		name: 'bus_m',
		color: 'primary.B300'
	}
};

export const Colors: Story = {
	args: {
		name: 'bus_m'
	},
	render: args => (
		<>
			<Icon {...args} color="grayscale.G100" />
			<Icon {...args} color="grayscale.G800" />
			<Icon {...args} color="primary.B100" />
			<Icon {...args} color="primary.B600" />
			<Icon {...args} color="secondary.GB500" />
			<Icon {...args} color="secondary.GB600" />
			<Icon {...args} color="feedback.LR200" />
			<Icon {...args} color="feedback.LR600" />
		</>
	)
};

export const Name: Story = {
	args: {},
	render: args => (
		<>
			<Icon {...args} name="bus_m" />
			<Icon {...args} name="comment_m" />
			<Icon {...args} name="community_m" />
			<Icon {...args} name="reply_m" />
			<Icon {...args} name="search_m" />
		</>
	)
};

export const Sizes: Story = {
	args: {
		color: 'primary.B300'
	},
	render: args => (
		<>
			<Icon {...args} name="bus_s" />
			<Icon {...args} name="bus_m" />
		</>
	)
};
