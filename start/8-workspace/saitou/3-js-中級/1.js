// switch
const device = "iphone"; // "ipad", "iphone", "android", "windows", "mac", ...

switch (device) {
  case "iphone":
    console.log("iphoneです！");
    break;

  case "ipad":
    console.log("ipadです！");
    break;

  case "android":
    console.log("androidです！");
    break;

  case "windows":
    console.log("windowsです！");
    break;

  case "mac":
    console.log("macです！");
    break;

  default:
    console.log("otherです！");
    break;
}
