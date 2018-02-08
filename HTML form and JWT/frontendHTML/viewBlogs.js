$(document).ready(() => {
  $.ajax({
    url: "http://localhost:3000/blogData",
    type : "POST",
    success : (res) => {
      $('#content').html("<table><thead><tr><th>Username</th><th>Post</th><.tr></table>")
      $.each(res, ((index, element) => {
        $('table').append('<tr><td>' + element.postedBy + '</td></td>' + element.blogContent )
      }))      
    }
  })
})
