import "./bootstrap";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

import $ from "jquery";
window.$ = window.jQuery = $;

import * as Popper from "@popperjs/core";
window.Popper = Popper;

import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

import "datatables.net/js/jquery.dataTables.min.js";

import "datatables.net-bs5/js/dataTables.bootstrap5.min.js";

import "waypoints/lib/noframework.waypoints.min.js";

import SmoothScrollbar from "smooth-scrollbar";
window.Scrollbar = SmoothScrollbar;
import Select2 from "select2";
Select2();

import ApexCharts from "apexcharts";
window.ApexCharts = ApexCharts;
