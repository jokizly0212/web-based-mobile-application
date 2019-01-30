import { Pipe, PipeTransform } from '@angular/core';
import { MediaProvider } from '../../app/services/providers/media/media';
import { Media } from '../../interfaces/pic';

/**
 * Generated class for the GetTagByUserPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'getTag',
})
export class GetTagPipe implements PipeTransform {
  constructor(
    public mediaProvider: MediaProvider
  ) {}

  async transform(tag: string) {
    return new Promise((resolve, reject) => {
      this.mediaProvider.getFilesByTag(tag).subscribe((files: Media[]) => {
        files.forEach((file: Media) => {
          if (file.user_id === this.mediaProvider.user.user_id) {
            resolve(file.file_id);
          } else {
            reject('No profile image added.');
          }
        });
      });
    });
  }
}