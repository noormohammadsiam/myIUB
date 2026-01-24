        // Auto-update copyright year
        document.getElementById("copyright-year").textContent = new Date().getFullYear();

        // Audio Player Logic
        const audio = document.getElementById('profileAudio');
        const audioBtn = document.getElementById('audioBtn');
        const audioIcon = audioBtn.querySelector('i');
        const audioText = document.getElementById('audioText');

        audioBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                audioBtn.classList.add('playing');
                audioIcon.classList.remove('fa-music');
                audioIcon.classList.add('fa-pause');
                audioText.innerText = 'Pause IUB Anthem';
            } else {
                audio.pause();
                audioBtn.classList.remove('playing');
                audioIcon.classList.remove('fa-pause');
                audioIcon.classList.add('fa-music');
                audioText.innerText = 'Play IUB Anthem';
            }
        });

        // অডিও শেষ হলে বাটন রিসেট করা
        audio.addEventListener('ended', () => {
            audioBtn.classList.remove('playing');
            audioIcon.classList.remove('fa-pause');
            audioIcon.classList.add('fa-music');
            audioText.innerText = 'Play IUB Anthem';
        });

        // Dark Mode Toggle
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');
        const body = document.body;
        
        // Check saved theme
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            if(body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                
                // আইকন পরিবর্তন (চাঁদ)
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                
                // আইকন পরিবর্তন (সূর্য)
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        });

        // Mobile Menu Toggle Logic
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        function openSidebar() {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        }

        function closeSidebar() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }

        // Click toggle button
        menuToggle.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        // Click on Overlay (Outside content) to close
        overlay.addEventListener('click', closeSidebar);

        // Click on links to close sidebar automatically on mobile
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if(window.innerWidth < 992) {
                    closeSidebar();
                }
            });
        });

        // Active Link Highlighter on Scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if(scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
