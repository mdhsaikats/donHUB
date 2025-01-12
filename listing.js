document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const photo = document.getElementById('photo').files[0];

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            addDonationBlock(title, description, e.target.result);
        };
        reader.readAsDataURL(photo);
    }
});

function addDonationBlock(title, description, photoSrc) {
    const container = document.getElementById('donationContainer');

    const block = document.createElement('div');
    block.classList.add('donation-block');

    block.innerHTML = `
        <img src="${photoSrc}" alt="Donation Image">
        <div class="details">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;

    container.prepend(block);
}
