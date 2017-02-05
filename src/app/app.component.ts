import { Component, OnInit } from '@angular/core';
import { Light } from './model/light';
import { BridgeService } from './shared/services/bridge.service';
import 'rxjs/Rx';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	public lights: Light[] = [];

	constructor(private bridgeService: BridgeService) { }

	ngOnInit() {
		this.bridgeService.getLights()
			.subscribe(res => {
				for (var obj in res) {
					this.lights.push({
						id: +obj,
						uniqueid: res[obj].uniqueid,
						name: res[obj].name,
						state: res[obj].state
					});
				}
				console.log(this.lights);
			});
	}

	public updateStatus(lightId: number) {
		const state: boolean = this.lights.filter(l => l.id === lightId)[0].state.on;
		this.bridgeService.updateStatus(lightId, state)
			.subscribe(res => {

			});
	}
}
