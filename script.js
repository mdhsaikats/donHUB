console.log('Welcome to DonateHub!');

// Example: Smooth scrolling for internal navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default behavior for internal links (those with #)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            document.getElementById(targetId)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
