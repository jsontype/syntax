import React from "react";

import { AuthRuter, DashboardRouter, ErrorRoutes } from "../router/dashboard";

export const IndexRouters = [...DashboardRouter, ...AuthRuter, ...ErrorRoutes];
