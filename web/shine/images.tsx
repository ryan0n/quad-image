import { h, Component } from 'preact';
import { SavedImage } from '../types';
import { Image } from './image';

export type MaybeImage =
  | { code: 'image'; id: SavedImage }
  | { code: 'loading'; token: number }
  | { code: 'failed'; message: string };

export interface Props {
  images: MaybeImage[];
}

export class Images extends Component<Props> {
  render(props) {
    return (
      <ul id="images">
        {[...props.images].reverse().map((image) => {
          if ('image' === image.code) {
            return <Image id={image.id} />;
          }
          return <li class={'loading'} />;
        })}
      </ul>
    );
  }
}

export function isImage(image: MaybeImage): image is { code: 'image'; id: SavedImage } {
  return image.code === 'image';
}
