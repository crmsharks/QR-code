document.getElementById("business-card-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form inputs
  const name = document.getElementById("name").value;
  const companyName = document.getElementById("company-name").value;
  const position = document.getElementById("position").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const address = document.getElementById("address").value;

  // Generate QR code URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    `Name: ${name}\nCompany: ${companyName}\nPosition: ${position}\nPhone: ${phoneNumber}\nEmail: ${email}\nWebsite: ${website}\nAddress: ${address}`
  )}&size=200x200`;

  // Create business card HTML
  const cardHTML = `
    <img src="${qrCodeUrl}" alt="QR Code">
    <h3>${companyName}</h3>
    <h4>${name}</h4>
    <p>Position: ${position}</p>
    <p>Phone: ${phoneNumber}</p>
    <p>Email: ${email}</p>
    <p>Website: ${website}</p>
    <p>Address: ${address}</p>
  `;

  // Update card preview
  const cardPreview = document.getElementById("card-preview");
  cardPreview.innerHTML = cardHTML;

  // Show card preview
  document.getElementById("card-preview-container").classList.remove("hidden");
});

document.getElementById("download-btn").addEventListener("click", function () {
  const cardPreview = document.getElementById("card-preview");
  domtoimage.toBlob(cardPreview)
    .then(function (blob) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "business-card.png";
      link.click();
    });
});

document.getElementById("add-to-contacts-btn").addEventListener("click", function () {
  // TODO: Implement adding to contacts functionality
  alert("Add to Contacts functionality not implemented yet.");
});
