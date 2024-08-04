import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/common';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		color: {
			control: 'radio',
			options: ['primary', 'gray']
		},
		variant: {
			control: 'radio',
			options: ['outline', 'text', 'filled']
		},
		size: {
			control: 'radio',
			options: ['L', 'M', 'S']
		},
		disabled: {
			control: 'boolean'
		}
	},
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	decorators: Story => (
		<div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
			<Story />
		</div>
	)
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
	args: {
		color: 'primary',
		variant: 'filled',
		size: 'M',
		children: '버튼'
	}
};

export const PrimaryFilled: Story = {
	args: {
		color: 'primary',
		variant: 'filled',
		children: '버튼'
	},
	render: args => (
		<>
			<Button {...args} size="S" />
			<Button {...args} size="S" disabled />
			<Button {...args} size="M" />
			<Button {...args} size="M" disabled />
			<Button {...args} size="L" />
			<Button {...args} size="L" disabled />
		</>
	)
};

export const PrimaryOutline: Story = {
	args: {
		color: 'primary',
		variant: 'outline',
		children: '버튼'
	},
	render: args => (
		<>
			<Button {...args} size="S" />
			<Button {...args} size="S" disabled />
			<Button {...args} size="M" />
			<Button {...args} size="M" disabled />
			<Button {...args} size="L" />
			<Button {...args} size="L" disabled />
		</>
	)
};

export const PrimaryText: Story = {
	args: {
		color: 'primary',
		variant: 'text',
		children: '버튼'
	},
	render: args => (
		<>
			<Button {...args} size="S" />
			<Button {...args} size="S" disabled />
			<Button {...args} size="M" />
			<Button {...args} size="M" disabled />
			<Button {...args} size="L" />
			<Button {...args} size="L" disabled />
		</>
	)
};

export const GrayFilled: Story = {
	args: {
		color: 'gray',
		variant: 'filled',
		children: '버튼'
	},
	render: args => (
		<>
			<Button {...args} size="S" />
			<Button {...args} size="S" disabled />
			<Button {...args} size="M" />
			<Button {...args} size="M" disabled />
			<Button {...args} size="L" />
			<Button {...args} size="L" disabled />
		</>
	)
};

export const GrayOutline: Story = {
	args: {
		color: 'gray',
		variant: 'outline',
		children: '버튼'
	},
	render: args => (
		<>
			<Button {...args} size="S" />
			<Button {...args} size="S" disabled />
			<Button {...args} size="M" />
			<Button {...args} size="M" disabled />
			<Button {...args} size="L" />
			<Button {...args} size="L" disabled />
		</>
	)
};

export const GrayText: Story = {
	args: {
		color: 'gray',
		variant: 'text',
		children: '버튼'
	},
	render: args => (
		<>
			<Button {...args} size="S" />
			<Button {...args} size="S" disabled />
			<Button {...args} size="M" />
			<Button {...args} size="M" disabled />
			<Button {...args} size="L" />
			<Button {...args} size="L" disabled />
		</>
	)
};
