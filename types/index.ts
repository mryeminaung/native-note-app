export interface Note {
	id: string;
	author_id: number;
	title: string;
	content: string;
	bgColor: string;
	starred: boolean;
	priority: string;
	created_at: string;
	updated_at: string;
}

export interface NewNoteProp {
	title: string;
	content: string;
	bgColor: string;
	priority: "low" | "medium" | "high";
	starred: false;
	author_id: number;
	created_at?: string;
	updated_at?: string;
}
