// Read browser name from external source
var browser_name: string = 'firefox'; // example input
browser_name = browser_name.toLowerCase().trim(); // convert to lowercase //trim the spaces

switch (browser_name) {
    case "chrome": // first condition
        console.log("Run on Chrome");
        break;

    case "firefox": // second condition
        console.log("Run on Firefox");
        break;

    case "webkit": // fourth condition
        console.log("Run on Chrome and WebKit");
        break;

    case "edge": // third condition
        console.log("Run on Edge");
        break;

    case "safari": // third condition
        console.log("Run on Safari");
        break;

    default:
        console.log("Playwright doesn't support this browser. Browser name is ---> " + browser_name);
        break;
}


const monthno: number = 17;

switch (monthno) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("Sep");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
    default:
        console.log("Invalid month number");
        break;
}






