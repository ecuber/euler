// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import { _version } from "@visly/core";
import { exists } from "./_internal_utils";
const LATEST_STABLE_RELEASE = "1.0.10";
export function checkVersion() {
  if (!exists(_version) || LATEST_STABLE_RELEASE !== _version) {
    console.error(
      `Your @visly/core package is out of date. This may cause some components to not work as expected. Please update @visly/core to the latest version. Your version: ${_version}, latest: ${LATEST_STABLE_RELEASE}`
    );
  }
}
