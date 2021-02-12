export enum Tone {
	Danger,
	Info,
	Neutral,
	Promote,
	Success,
	Warning,
}

export const getClassNameForTone = (tone: Tone): string => {
	switch (tone) {
		case Tone.Danger:
			return 'danger';
		case Tone.Info:
			return 'info';
		case Tone.Promote:
			return 'promote';
		case Tone.Success:
			return 'success';
		case Tone.Warning:
			return 'warning';
		case Tone.Neutral:
		default:
			return 'neutral';
	}
}