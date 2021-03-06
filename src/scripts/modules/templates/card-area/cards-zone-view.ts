import { html } from 'lighterhtml';
import { trackCard } from "../card/track"

export const zoneViewArea =  function zoneViewArea (state:any) {
    const { uiData } = state;
    const { selectedZone } = uiData;

    const zoneArr = selectedZone.split("-");
    let playerZone = "zones";
    let zone = selectedZone;
    if (zoneArr[0] === "opp") {
        playerZone = "opponentZones"
        zone = zoneArr[1];
    }

    return html`
        <div class="view-area-wrapper">
            ${
                state.data[playerZone][zone].map((data:any, i:number) => html`
                    <div class="track-card-wrapper">
                        ${trackCard(data, i, state, selectedZone)}
                    </div>
                `)
            }
        </div>
    `;
}