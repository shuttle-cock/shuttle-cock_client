import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../../components/common';

const meta: Meta<typeof Toggle> = {
	title: 'Components/Toggle',
	component: Toggle,
	argTypes: {
		checked: { control: 'boolean' },
		disabled: { control: 'boolean' }
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

export const ToggleStroy: Story = {
	args: {
		checked: false,
		disabled: false
	}
};

export const Active: Story = {
	args: {
		checked: true,
		disabled: false
	}
};

export const Disabled: Story = {
	args: {
		checked: false,
		disabled: true
	}
};
