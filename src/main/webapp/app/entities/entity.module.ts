import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ApitrackingPersonModule } from './person/person.module';
import { ApitrackingTrackModule } from './track/track.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ApitrackingPersonModule,
        ApitrackingTrackModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApitrackingEntityModule {}
