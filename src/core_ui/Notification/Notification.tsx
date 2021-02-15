import React, { ReactNode } from 'react';
import { getClassNameForTone, Tone } from '../Tone';
import './Notification.css';

export interface INotificationProps {
	children: ReactNode;
	tone: Tone;
}

const Notification = ({ children, tone }: INotificationProps) => {
	return (
		<div className={`c-notification ${getClassNameForTone(tone)}`} role="alert">
			{children}
		</div>
	);
}

export default Notification;