$(document).ready(function () {
  // ADD ACTIVE CLASS TO SIDE MENU ITEMS ON CLICK
  jQuery.ajax({
    url: "http://localhost:8080/doctors/1",
    type: "GET",
    success: function (data) {
      $("#doc_name").html(data.name);
      
      let html = "";
      let html2="";
      let count=0;
      let total = data.appointments.length;
      for(var i=0;i<data.appointments.length;i++)
      {
         
          if(data.appointments[i].status == "pending"){
             count++;
          }

           html +=  `
          <tr>
                  <td>
                    <p>${data.appointments[i].patient.name}</p>
                  </td>
                  <td>${data.appointments[i].date}</td>
                  <td>${data.appointments[i].symptom}</td>
                  <td><span class="status completed">${data.appointments[i].status}</span></td>
                  <td>
                    <button class="status completed">
                      <i class="bx bx-show"></i>
                    </button>
                  </td>
                </tr>
          `
          html2= `
          <li class="completed">
                <i class="bx bx-task"></i>
                <p>Appointment</p>
                <p>${data.appointments[i].time}</p>
              </li>`

         $("#apt_table").append(html); }
         let percentage = count/total *100;
         $("#apt_count").html(total);
         $("#stat").html(count);
         $("#effi").html(percentage).append("%");
         $("#sch").html(html2);
      console.log(data);
    },
  });

  $("#sidebar .side-menu.top li a").click(function (e) {
    e.preventDefault();
    $("#sidebar .side-menu.top li").removeClass("active");
    $(this).parent().addClass("active");
  });

  // TOGGLE SIDEBAR
  $("#content nav .bx.bx-menu").click(function () {
    $("#sidebar").toggleClass("hide");
  });

  // OPEN/CLOSE FORM
  $("#open-form").click(function () {
    $("#myForm").show();
  });
  $("#close-form").click(function () {
    $("#myForm").hide();
  });

  // SWITCH DARK/LIGHT MODE
  $("#switch-mode").change(function () {
    if ($(this).is(":checked")) {
      $("body").addClass("dark");
    } else {
      $("body").removeClass("dark");
    }
  });
});
