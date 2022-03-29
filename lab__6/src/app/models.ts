export interface Album{
  userId: number;
  id: number;
  title: string;
}

export interface AlbumPhotos {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
