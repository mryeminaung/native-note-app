import { clsx, type ClassValue } from "clsx";
import { format, formatDistanceToNow, isBefore, subDays } from "date-fns";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes and handles conditional logic
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatNoteDate = (dateString: string) => {
	const date = new Date(dateString);
	const now = new Date();

	// If the date is older than 7 days, show the actual date (dd-mm-yy)
	if (isBefore(date, subDays(now, 7))) {
		return format(date, "dd-MM-yy");
	}

	// Otherwise, show "3 hours ago", "Yesterday", etc.
	return formatDistanceToNow(date, { addSuffix: true });
};
