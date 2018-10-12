import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITheme } from 'app/shared/model/theme.model';

type EntityResponseType = HttpResponse<ITheme>;
type EntityArrayResponseType = HttpResponse<ITheme[]>;

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private resourceUrl = SERVER_API_URL + 'api/themes';

    constructor(private http: HttpClient) {}

    create(theme: ITheme): Observable<EntityResponseType> {
        return this.http.post<ITheme>(this.resourceUrl, theme, { observe: 'response' });
    }

    update(theme: ITheme): Observable<EntityResponseType> {
        return this.http.put<ITheme>(this.resourceUrl, theme, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITheme>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITheme[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
