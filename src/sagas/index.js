import { all } from "redux-saga/effects";
import { watchGetCharactersListSaga } from "./getListSaga";

export default function* rootSaga() {
  yield all([watchGetCharactersListSaga()]);
}
