import { NgModule } from '@angular/core';
import { DateFormatPipe } from './date-format/date-format';
import { ThumbnailPipe } from './thumbnail/thumbnail';
import { GetTagPipe } from './get-tag/get-tag';
@NgModule({
	declarations: [DateFormatPipe,
    ThumbnailPipe,
    GetTagPipe],
	imports: [],
	exports: [DateFormatPipe,
    ThumbnailPipe,
    GetTagPipe]
})
export class PipesModule {}
