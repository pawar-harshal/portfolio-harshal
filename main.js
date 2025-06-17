 // Navbar Active Link and Smooth Scroll with Offset
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                // Smooth scroll with offset
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offset = 20;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                if (window.innerWidth <= 991) {
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const toggler = document.querySelector('.navbar-toggler');
                        toggler.click(); // Programmatically close the menu
                    }
                }
            });
        });

        // Show Success Message After Form Submission
        document.getElementById('email-form').addEventListener('submit', function (e) {
            // Prevent default temporarily to handle validation
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!fullName || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields.');
                return;
            }

            // Allow form submission to FormSubmit
            setTimeout(() => {
                document.getElementById('email-form').style.display = 'none';
                document.getElementById('success-message').style.display = 'block';
            }, 1000); // Delay to simulate submission
        });