document.getElementById('bloodRequestForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Capture form data
    const name = document.getElementById('name').value;
    const bloodType = document.getElementById('blood-type').value;
    const location = document.getElementById('location').value;
    const urgency = document.getElementById('urgent').value;

    // Display a message confirming the request
    alert(`Request for ${bloodType} blood submitted! We will show available donors in your area.`);

    // Simulate a list of donors based on location and blood type (this would come from a server in a real app)
    const donors = [
        { name: 'John Doe', bloodType: 'A+', location: 'New York' },
        { name: 'Jane Smith', bloodType: 'A+', location: 'New York' },
        { name: 'Alice Brown', bloodType: 'B+', location: 'New York' },
        { name: 'Bob Johnson', bloodType: 'O-', location: 'Los Angeles' },
        { name: 'Charlie Green', bloodType: 'A+', location: 'New York' },
    ];

    // Filter donors by location and blood type
    const matchingDonors = donors.filter(donor => donor.bloodType === bloodType && donor.location.toLowerCase().includes(location.toLowerCase()));

    // Display matching donors in the 'donors-list' section
    const donorsListContainer = document.getElementById('donors-list');
    donorsListContainer.innerHTML = '';

    if (matchingDonors.length > 0) {
        const donorsList = document.createElement('ul');
        matchingDonors.forEach(donor => {
            const donorItem = document.createElement('li');
            donorItem.textContent = `Name: ${donor.name}, Blood Type: ${donor.bloodType}, Location: ${donor.location}`;
            donorsList.appendChild(donorItem);
        });
        donorsListContainer.appendChild(donorsList);
    } else {
        donorsListContainer.innerHTML = `<p>No donors found in your area for the requested blood type.</p>`;
    }
});
