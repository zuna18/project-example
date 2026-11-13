import type { Meta, StoryObj } from '@storybook/react-vite';
import VolumeSlider from './VolumeSlider';

const lowLabel = 'Volumen bajo';
const highLabel = 'Volumen alto';

const meta: Meta<typeof VolumeSlider> = {
  title: 'UI/VolumeSlider',
  component: VolumeSlider,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof VolumeSlider>;

export const Low: Story = {
  args: {
    label: lowLabel,
    defaultValue: 20,
  },
};

export const High: Story = {
  args: {
    label: highLabel,
    defaultValue: 80,
  },
};

export const SinLabel: Story = {
  args: {
    label: '',
    defaultValue: 50,
  },
};
