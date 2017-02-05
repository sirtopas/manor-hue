import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Light } from '../../model/light';

@Injectable()
export class BridgeService {

	private baseApiUrl: string = 'http://192.168.1.87/api/Dj6SJXbeIIpyQ5uiaIb6BF0eBHgnSUKWxAKFHBYL/';

	constructor(private http: Http) { }

	public getLights(): Observable<Light[]> {
		return this.http
			.get(this.baseApiUrl + 'lights')
			.map(res => res.json());
	}

	public updateStatus(lightId: number, state: boolean) {
		console.log(state);
		return this.http
			.put(this.baseApiUrl + 'lights/' + lightId + '/state/', { 'on': state })
			.map(res => res.json());
	}
}
