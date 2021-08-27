let regFormLink= "https://regFormTest/reg/?event=mkmkmkmk"; // <seid2>
let regFormAdminLink = "https://regFormAdminTest/reg/report?op=view&seid=jfdjkdfdkfdkj&meid=1234";
let qaLinkSEID2 = "https://qaTest/reg/?event=ghjkddkl";
let qaAdminLinkSEID1 = "https://qaAdminTest/reg/admin/?op=edit&seid=12345&meid=fdjfakfhj";

const CALENDAR_EVENT_LINK_FORMAT = "https://calendar-test/regi/?event=<seid_2>"
const QA_FORM_LINK_FORMAT = "https://qa-link-test/regi/subite-question/?&seid=<seid_2>"
const QA_ADMIN_LINK_FORMAT = "https://qa-link-test/regi/?acess=2002203&seid=<seid>"

const getSearchParams = url => {
  let params = url.substring(url.indexOf('?') + 1);
  return new URLSearchParams(params);
}

const generateCalendarEventLink = url => {
  let searchParams = getSearchParams(url);
  let event = searchParams.get('event');
  // console.log("event:", event);
  let newLink = CALENDAR_EVENT_LINK_FORMAT;
  newLink = newLink.replace("<seid_2>", event);
  return newLink;
}

const generateQAFormLink = url => {
  let searchParams = getSearchParams(url);
  let seid2 = searchParams.get('event');
  // console.log("seid_2:", seid2);
  let newLink = QA_FORM_LINK_FORMAT;
  newLink = newLink.replace("<seid_2>", seid2);
  return newLink;
}

const generateQAAdminLink = url => {
  let searchParams = getSearchParams(url);
  let seid = searchParams.get('seid');
  // console.log("seid:",seid);
  let newLink = QA_ADMIN_LINK_FORMAT;
  newLink = newLink.replace("<seid>", seid);
  return newLink;
}

let newCalendarLink =  generateCalendarEventLink(regFormLink);
console.log(newCalendarLink);

let newQAFormLink = generateQAFormLink(qaLinkSEID2);
console.log(newQAFormLink);

let newQAAdminLink = generateQAAdminLink(qaAdminLinkSEID1);
console.log(newQAAdminLink)