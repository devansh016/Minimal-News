$(function () {
  $.getJSON("/contributors/data", function (data) {
    $.each(data.contributors, function (i, contributor) {
      var contributorCol = `
      <div class="contributor">
          <div class="contributor_img">
            <img src="${contributor.image_url}" alt="${contributor.name}" />
          </div>
          <h3>${contributor.name}</h3>
          <a href="${contributor.github_url}" target="_blank"><button class="button"><i class="fab fa-github"></i> Follow</button></a>
        </div>
        `;
      $(contributorCol).appendTo(".contributors");
    });
  });
});
