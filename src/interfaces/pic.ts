import { Thumbnail } from "ionic-angular";

export interface Pic {
    title: string,
    description: string,
    filename: string,
    time_added: string,
}
export interface Media {
    file_id: number;
    user_id: number;
    filename: string;
    filesize: number;
    title: string;
    description: string;
    media_type: string;
    mime_type: string;
    time_added: string;
    screenshot?: string;
    thumbnails?: Thumbnail;
  }