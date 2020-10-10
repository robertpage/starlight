import { produce } from "immer"
import { renderDOM } from "../templates/renderDOM"
import { generateDeck } from "../deck-gen"

const lastState = [];

export function initState (data:any) {
    lastState.push(data);
    // renderDOM(lastState[0]);

    generateDeck(data);

}

export const updateState = function updateState (updateFucnt:any) {
    const nextState = produce(lastState[lastState.length - 1], updateFucnt);
    renderDOM(nextState);
    lastState.push(nextState);
    return true;
}

export function getCurrentState () {
    return lastState[lastState.length - 1];
}

export function getStateHistory() {
    return lastState;
}

export const undo = function undo () {
    if (lastState.length <= 1) return;
    lastState.pop();
    renderDOM(lastState[lastState.length - 1]);
    return true;
}