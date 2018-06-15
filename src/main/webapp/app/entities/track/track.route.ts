import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { TrackComponent } from './track.component';
import { TrackDetailComponent } from './track-detail.component';
import { TrackPopupComponent } from './track-dialog.component';
import { TrackDeletePopupComponent } from './track-delete-dialog.component';

@Injectable()
export class TrackResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const trackRoute: Routes = [
    {
        path: 'track',
        component: TrackComponent,
        resolve: {
            'pagingParams': TrackResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tracks'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'track/:id',
        component: TrackDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tracks'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const trackPopupRoute: Routes = [
    {
        path: 'track-new',
        component: TrackPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tracks'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'track/:id/edit',
        component: TrackPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tracks'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'track/:id/delete',
        component: TrackDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tracks'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
