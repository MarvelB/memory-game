import { Image } from "./image.model";

export interface Card extends Image {
  id: number;
  matched: boolean;
}
