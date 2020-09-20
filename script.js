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
        let business_email = data.graphql.user.business_email;
        let external_url = data.graphql.user.external_url;
        let follower_num = data.graphql.user.edge_followed_by.count;
        $("#userid").html(`${username}`);
        $("#biography").html(`${biography}`);
        $("#userprofile").html(`<img src='${profilePicture}' style="width: 50px; height: 50px;"/>`);
        $("#business_email").html(`${business_email}`);
        $("#external_url").html(`${external_url}`);
        $("#follower_num").html(`${follower_num}`);
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