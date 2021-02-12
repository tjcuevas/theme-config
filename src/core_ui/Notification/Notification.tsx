import React, { ReactNode } from 'react';
import { getClassNameForTone, Tone } from '../Tone';
import './Notification.css';

interface IProps {
	children: ReactNode;
	tone: Tone;
}

const Notification = ({ children, tone }: IProps) => {
	return (
		<div className={`c-notification ${getClassNameForTone(tone)}`} role="alert">
			{children}
		</div>
	);
}

export default Notification;