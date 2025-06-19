import { Middleware } from "@reduxjs/toolkit";
import type { RootState } from "../store";
declare const skipHelper: Middleware<{}, RootState>;
export default skipHelper;
