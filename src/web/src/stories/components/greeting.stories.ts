import type { Meta, StoryObj } from '@storybook/angular';

import { GreetingComponent } from 'app/features/greeting/greeting.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<GreetingComponent> = {
  title: 'Components/Greeting',
  component: GreetingComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<GreetingComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const GreetingStory: Story = {
  name: 'Greeting',
  args: {},
};