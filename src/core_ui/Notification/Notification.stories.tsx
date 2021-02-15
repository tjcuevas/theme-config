import type { Story } from '@storybook/react';
import React from 'react';
import { Tone } from '../Tone';
import Notification, { INotificationProps } from './Notification';

export default {
	title: 'components/Notification',
	component: Notification
}

const Template: Story<INotificationProps> = (args: INotificationProps) => <Notification {...args}>Some important message</Notification>;

export const Danger = Template.bind({});
Danger.args = { tone: Tone.Danger };

export const Info = Template.bind({});
Info.args = { tone: Tone.Info };

export const Neutral = Template.bind({});
Neutral.args = { tone: Tone.Neutral };

export const Promote = Template.bind({});
Promote.args = { tone: Tone.Promote };

export const Success = Template.bind({});
Success.args = { tone: Tone.Success };

export const Warning = Template.bind({});
Warning.args = { tone: Tone.Warning };