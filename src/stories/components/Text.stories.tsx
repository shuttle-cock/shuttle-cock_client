import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../components/common';

const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
	argTypes: {
		color: {
			control: 'select',
			options: [
				'grayscale.G25',
				'grayscale.G50',
				'grayscale.G75',
				'grayscale.G100',
				'grayscale.G200',
				'grayscale.G300',
				'grayscale.G400',
				'grayscale.G500',
				'grayscale.G600',
				'grayscale.G700',
				'grayscale.G800',
				'grayscale.G900',
				'grayscale.W',
				'grayscale.B'
			]
		},
		size: {
			control: 'select',
			options: ['xxxl', 'xxl', 'xl', 'l', 'm', 'r', 's', 'xs']
		},
		weight: {
			control: 'select',
			options: ['bold', 'medium', 'regular']
		},
		tag: {
			control: 'select',
			options: ['span', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
		}
	},
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	decorators: Story => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
			<Story />
		</div>
	)
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TextStory: Story = {
	args: {
		color: 'grayscale.G700',
		noWrap: false,
		size: 'r',
		weight: 'regular',
		tag: 'span',
		children: '프리텐다드'
	}
};

export const Colors: Story = {
	args: {
		children: '프리텐다드'
	},
	render: args => (
		<>
			<Text {...args} color="grayscale.G100" />
			<Text {...args} color="grayscale.G800" />
			<Text {...args} color="primary.B100" />
			<Text {...args} color="primary.B600" />
			<Text {...args} color="secondary.GB500" />
			<Text {...args} color="secondary.GB600" />
			<Text {...args} color="feedback.LR200" />
			<Text {...args} color="feedback.LR600" />
		</>
	)
};

export const Sizes: Story = {
	args: {
		children: '프리텐다드'
	},
	render: args => (
		<>
			<Text {...args} size="xxxl" />
			<Text {...args} size="xxl" />
			<Text {...args} size="xl" />
			<Text {...args} size="l" />
			<Text {...args} size="m" />
			<Text {...args} size="r" />
			<Text {...args} size="s" />
			<Text {...args} size="xs" />
		</>
	)
};

export const Weight: Story = {
	args: {
		children: '프리텐다드'
	},
	render: args => (
		<>
			<Text {...args} weight="bold" />
			<Text {...args} weight="medium" />
			<Text {...args} weight="regular" />
		</>
	)
};

export const NoWrap: Story = {
	args: {},
	decorators: Story => (
		<div style={{ width: '200px', background: '#dfdfdf' }}>
			<Story />
		</div>
	),
	render: args => (
		<>
			<Text {...args} noWrap>
				이 텍스트는 줄바꿈되지 않습니다. 이 텍스트는 줄바꿈되지 않습니다.
			</Text>
			<Text {...args}>이 텍스트는 줄바꿈됩니다. 이 텍스트는 줄바꿈됩니다.</Text>
		</>
	)
};
