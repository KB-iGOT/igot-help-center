/**
 * @deprecated — Videos are now loaded dynamically from /content/videos/catalog.json
 * To add/edit videos, update public/content/videos/catalog.json instead.
 */
export interface VideoCategory {
  id: string;
  label: string;
  icon: string;
}

export const videoCategories: VideoCategory[] = [];

export interface VideoTutorial {
  id: string;
  title: string;
  youtubeUrl: string;
  youtubeId: string;
  updatedOn: string;
  tab: "mdo" | "learner" | "cbp";
  category: string;
}

export const videoTutorials: VideoTutorial[] = [];
