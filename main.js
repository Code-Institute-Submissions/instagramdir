$("#submitInstagram").click(function () {
    
  console.log("Clicked");
  input = $("#inputProfile").val();
  $.ajax({
    url: `https://www.instagram.com/${input}/?__a=1`,
    method: "GET",
    }).done(function(data) {
        let username = data.graphql.user.username
        let biography = data.graphql.user.biography
        let profilePicture = data.graphql.user.profile_pic_url_hd
        $("#userid").html(`Username : ${username}`);
        $("#biography").html(`Biography : ${biography}`);
        $("#userprofile").append(`<img src='${profilePicture}'/>`);
    }
  );
});

// $.ajax({
//     url: "https://www.instagram.com/cupplets/?__a=1",
//     method: "GET"
// }).done(function(resp) {
//     console.log(resp)
// })
// });
