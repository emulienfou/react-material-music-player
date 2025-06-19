import { Middleware } from "@reduxjs/toolkit";
import type { RootState } from "../store";
declare const eventHandler: Middleware<{}, RootState>;
export default eventHandler;
