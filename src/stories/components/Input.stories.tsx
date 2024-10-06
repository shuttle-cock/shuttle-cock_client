import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@components/common';

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		state: {
			control: {
				type: 'select',
				options: ['default', 'touch', 'active', 'error', 'disabled']
			}
		},
		size: {
			control: {
				type: 'select',
				options: ['L', 'M']
			}
		},
		iconLeading: { control: 'text' },
		iconTrailing: { control: 'text' },
		errorMessage: { control: 'text' },
		disabled: { control: 'boolean' }
	},
	parameters: { layout: 'centered' },
	tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		state: 'default',
		size: 'M',
		placeholder: 'Text',
		disabled: false
	}
};

export const Touch: Story = {
	args: {
		state: 'touch',
		size: 'M',
		placeholder: 'Text',
		disabled: false
	}
};

export const Active: Story = {
	args: {
		state: 'active',
		size: 'M',
		placeholder: 'Text',
		disabled: false
	}
};

export const Error: Story = {
	args: {
		state: 'error',
		size: 'M',
		placeholder: 'Text',
		errorMessage: 'Error Message',
		disabled: false
	}
};

export const Disabled: Story = {
	args: {
		state: 'disabled',
		size: 'M',
		placeholder: 'Text',
		disabled: true
	}
};
