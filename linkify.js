const CALENDAR_EVENT_LINK_FORMAT = "https://calendar-test/regi/?event=<seid_2>";
const QA_FORM_LINK_FORMAT = "https://qa-form-link-test/regi/submit-question/?&seid=<seid_2>";
const QA_ADMIN_LINK_FORMAT = "https://qa-admin-link-test/regi/?acess=2002203&seid=<seid>";

$("#reg-form-link-button").click(() => {
  let reg_form_link = $('#reg-form-link').val();
  let generatedLink = generateCalendarEventLink(reg_form_link)

  if ($("#calendar-copy-button").hasClass("btn-success")) {
    $("#calendar-copy-button").removeClass("btn-success")
    $("#calendar-copy-button").addClass("btn-secondary")
    
    $("#calendar-clip-2").hide();
    $("#calendar-clip-1").show();
  }

  if (generatedLink) {
    if ($("#reg-form-link").hasClass("is-invalid")) {
      $("#reg-form-link").removeClass("is-invalid");
    }
    $("#new-calendar-div").css("visibility", "")
    $("#new-calendar-event-link").val(generatedLink);
    $("#test-calendar-link").attr("href", generatedLink);
  } else {
    $("#new-calendar-div").css("visibility", "hidden")
    $("#reg-form-link").addClass("is-invalid");
  }
})

$("#qa-form-link-button").click(() => {
  let qa_form_link = $('#qa-form-link').val();
  let generatedLink = generateQAFormLink(qa_form_link);

  if ($("#qa-form-copy-button").hasClass("btn-success")) {
    $("#qa-form-copy-button").removeClass("btn-success")
    $("#qa-form-copy-button").addClass("btn-secondary")
    
    $("#qa-form-clip-2").hide();
    $("#qa-form-clip-1").show();
  }

  if (generatedLink) {
    if ($("#qa-form-link").hasClass("is-invalid")) {
      $("#qa-form-link").removeClass("is-invalid");
    }
    $("#new-qa-form-div").css("visibility", "")
    $("#new-qa-form-link").val(generatedLink);
    $("#test-qa-form-link").attr("href", generatedLink);
  } else {
    $("#new-qa-form-div").css("visibility", "hidden")
    $("#qa-form-link").addClass("is-invalid");
  }
})

$("#qa-admin-link-button").click(() => {
  let qa_admin_link = $("#qa-admin-link").val();
  let generatedLink = generateQAAdminLink(qa_admin_link);

  if ($("#qa-admin-copy-button").hasClass("btn-success")) {
    $("#qa-admin-copy-button").removeClass("btn-success")
    $("#qa-admin-copy-button").addClass("btn-secondary")
    
    $("#qa-admin-clip-2").hide();
    $("#qa-admin-clip-1").show();
  }

  if (generatedLink) {
    if ($("#qa-admin-link").hasClass("is-invalid")) {
      $("#qa-admin-link").removeClass("is-invalid");
    }
    $("#new-qa-admin-div").css("visibility", "")
    $("#new-qa-admin-link").val(generatedLink);
    $("#test-qa-admin-link").attr("href", generatedLink);
  } else {
    $("#new-qa-admin-div").css("visibility", "hidden")
    $("#qa-admin-link").addClass("is-invalid");
  }
})

const getSearchParams = url => {
  let params = url.substring(url.indexOf('?') + 1);
  return new URLSearchParams(params);
}

const generateCalendarEventLink = url => {
  let searchParams = getSearchParams(url);
  let event = searchParams.get('event');

  if (event) {
    let newLink = CALENDAR_EVENT_LINK_FORMAT;
    newLink = newLink.replace("<seid_2>", event);
    return newLink;
  } else {
    return null;
  }
}

const generateQAFormLink = url => {
  let searchParams = getSearchParams(url);
  let seid2 = searchParams.get('event');

  if (seid2) {
    let newLink = QA_FORM_LINK_FORMAT;
    newLink = newLink.replace("<seid_2>", seid2);
    return newLink;
  } else {
    return null;
  }
}

const generateQAAdminLink = url => {
  let searchParams = getSearchParams(url);
  let seid = searchParams.get('seid');
  if (seid) {
    let newLink = QA_ADMIN_LINK_FORMAT;
    newLink = newLink.replace("<seid>", seid);
    return newLink;
  } else {
    return null;
  }
}

$("#calendar-copy-button").click(() => {
  $("#new-calendar-event-link").val($("#new-calendar-event-link").val()).select();
  document.execCommand("copy");

  $("#calendar-copy-button").removeClass("btn-secondary")
  $("#calendar-copy-button").addClass("btn-success")
  
  $("#calendar-clip-1").hide();
  $("#calendar-clip-2").show();
})

$("#qa-form-copy-button").click(() => {
  $("#new-qa-form-link").val($("#new-qa-form-link").val()).select();
  document.execCommand("copy");
  
  $("#qa-form-copy-button").removeClass("btn-outline-secondary")
  $("#qa-form-copy-button").addClass("btn-success")

  $("#qa-form-clip-1").hide();
  $("#qa-form-clip-2").show();
})

$("#qa-admin-copy-button").click(() => {
  $("#new-qa-admin-link").val($("#new-qa-admin-link").val()).select();
  document.execCommand("copy");
  
  $("#qa-admin-copy-button").removeClass("btn-outline-secondary")
  $("#qa-admin-copy-button").addClass("btn-success")

  $("#qa-admin-clip-1").hide();
  $("#qa-admin-clip-2").show();
})
