import { Middleware } from "@reduxjs/toolkit";
import type { RootState } from "../store";
declare const audioOutput: Middleware<{}, RootState>;
export default audioOutput;
