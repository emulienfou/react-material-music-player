import { Middleware } from "@reduxjs/toolkit";
import type { RootState } from "../store";
declare const shuffler: Middleware<{}, RootState>;
export default shuffler;
