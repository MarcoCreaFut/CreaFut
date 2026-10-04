(function () {
  var liens = [
    ["foot.html", "Foot"],
    ["personnalisation.html", "Personnalisation"],
    ["animes.html", "Animés"],
    ["basket.html", "Basket"],
    ["foot-us.html", "Foot US"],
    ["gaming.html", "Gaming"],
    ["graffitis.html", "Graffitis"],
    ["hand.html", "Hand"],
    ["hockey.html", "Hockey"],
    ["rugby.html", "Rugby"],
    ["supporters.html", "Supporters"],
    ["volley.html", "Volley"],
    ["water-polo.html", "Water Polo"]
  ];

  var logo = "https://res.cloudinary.com/qwlhmio0/image/upload/v1789019044/Logo.png";
  var page = location.pathname.split("/").pop() || "index.html";

  var items = liens.map(function (l) {
    var actif = l[0] === page ? ' class="active"' : "";
    return '<li><a href="' + l[0] + '"' + actif + ">" + l[1] + "</a></li>";
  }).join("");

  var html =
    '<div class="nav">' +
      '<a href="index.html" class="logo"><img src="' + logo + '" alt="CreaFut" class="logo-img"></a>' +
      '<ul class="nav-links">' + items + "</ul>" +
      '<a href="index.html#contact" class="contact-badge" title="Contact">&#9993;</a>' +
    "</div>";

  var header = document.getElementById("site-header");
  if (header) header.innerHTML = html;
})();
