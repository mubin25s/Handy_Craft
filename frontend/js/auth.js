// ========================================
// AUTHENTICATION MANAGEMENT SYSTEM
// ========================================

// Get current user from localStorage
function getCurrentUser() {
    const userJson = localStorage.getItem('handycraft_user');
    return userJson ? JSON.parse(userJson) : null;
}

// Get all users from localStorage
function getAllUsers() {
    const usersJson = localStorage.getItem('handycraft_users');
    return usersJson ? JSON.parse(usersJson) : [];
}

// Save users to localStorage
function saveUsers(users) {
    localStorage.setItem('handycraft_users', JSON.stringify(users));
}

// Validate Gmail address
function validateGmail(email) {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailPattern.test(email);
}

// Validate email format (general)
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Register new user
function registerUser(firstName, lastName, email, password, confirmPassword) {
    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return { success: false, message: 'All fields are required!' };
    }

    if (!validateGmail(email)) {
        return { success: false, message: 'Please use a Gmail address (@gmail.com)!' };
    }

    if (password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters!' };
    }

    if (password !== confirmPassword) {
        return { success: false, message: 'Passwords do not match!' };
    }

    // Check if user already exists
    const users = getAllUsers();
    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (existingUser) {
        return { success: false, message: 'This email is already registered!' };
    }

    // Create new user
    const newUser = {
        id: Date.now().toString(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.toLowerCase().trim(),
        password: password, // In production, this should be hashed
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    return { success: true, message: 'Registration successful! Please login.' };
}

// Login user
function loginUser(email, password) {
    if (!email || !password) {
        return { success: false, message: 'Email and password are required!' };
    }

    const users = getAllUsers();
    const user = users.find(u =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (!user) {
        // Check if email exists
        const emailExists = users.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (!emailExists) {
            return {
                success: false,
                message: 'You are not a registered user. Please register!',
                notRegistered: true
            };
        } else {
            return { success: false, message: 'Incorrect password!' };
        }
    }

    // Save current user session
    const userSession = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        loginTime: new Date().toISOString()
    };

    localStorage.setItem('handycraft_user', JSON.stringify(userSession));

    return {
        success: true,
        message: 'Login successful!',
        user: userSession
    };
}

// Logout user
function logoutUser() {
    localStorage.removeItem('handycraft_user');
    window.location.href = 'index.html';
}

// Check if user is logged in
function isLoggedIn() {
    return getCurrentUser() !== null;
}

// Require login for certain pages
function requireLogin(redirectUrl = 'login.html') {
    if (!isLoggedIn()) {
        window.location.href = redirectUrl;
        return false;
    }
    return true;
}

// Update header with user info
function updateHeaderWithUser() {
    const user = getCurrentUser();
    const navLinks = document.getElementById('navLinks');

    if (!navLinks) return;

    // Find or create user menu
    let userMenu = document.getElementById('userMenu');

    if (user) {
        // User is logged in
        if (!userMenu) {
            // Create user menu
            const userMenuItem = document.createElement('li');
            userMenuItem.id = 'userMenu';
            userMenuItem.innerHTML = `
                <div style="position: relative;">
                    <button class="nav-link" style="background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-user-circle" style="font-size: 1.25rem;"></i>
                        <span>${user.firstName}</span>
                        <i class="fas fa-chevron-down" style="font-size: 0.75rem;"></i>
                    </button>
                    <div id="userDropdown" style="display: none; position: absolute; top: 100%; right: 0; background: var(--white); box-shadow: var(--shadow-md); border-radius: var(--radius-md); padding: 0.5rem; min-width: 150px; z-index: 1000;">
                        <a href="#" onclick="event.preventDefault(); logoutUser();" style="display: block; padding: 0.5rem 1rem; color: var(--chocolate); text-decoration: none; border-radius: var(--radius-sm);">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </div>
                </div>
            `;

            // Insert before cart icon
            const cartIcon = navLinks.querySelector('.cart-icon')?.parentElement;
            if (cartIcon) {
                navLinks.insertBefore(userMenuItem, cartIcon);
            } else {
                navLinks.appendChild(userMenuItem);
            }

            // Add dropdown toggle
            const userButton = userMenuItem.querySelector('button');
            const dropdown = document.getElementById('userDropdown');
            userButton.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                if (dropdown) dropdown.style.display = 'none';
            });
        }
    } else {
        // User not logged in - show login link
        if (!userMenu) {
            const loginMenuItem = document.createElement('li');
            loginMenuItem.id = 'userMenu';
            loginMenuItem.innerHTML = `
                <a href="login.html" class="nav-link">
                    <i class="fas fa-user"></i> Login
                </a>
            `;

            const cartIcon = navLinks.querySelector('.cart-icon')?.parentElement;
            if (cartIcon) {
                navLinks.insertBefore(loginMenuItem, cartIcon);
            } else {
                navLinks.appendChild(loginMenuItem);
            }
        }
    }
}

// Show modal popup
function showAuthModal(message, type = 'info') {
    // Create modal if it doesn't exist
    let modal = document.getElementById('authModal');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'authModal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="closeAuthModal()"></div>
            <div class="modal-content">
                <button class="modal-close" onclick="closeAuthModal()">×</button>
                <div class="modal-icon" id="modalIcon"></div>
                <p class="modal-message" id="modalMessage"></p>
                <div class="modal-buttons" id="modalButtons"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const iconEl = document.getElementById('modalIcon');
    const messageEl = document.getElementById('modalMessage');
    const buttonsEl = document.getElementById('modalButtons');

    // Set icon based on type
    if (type === 'error') {
        iconEl.innerHTML = '<i class="fas fa-exclamation-circle" style="color: var(--error); font-size: 3rem;"></i>';
    } else if (type === 'success') {
        iconEl.innerHTML = '<i class="fas fa-check-circle" style="color: var(--success); font-size: 3rem;"></i>';
    } else if (type === 'register') {
        iconEl.innerHTML = '<i class="fas fa-user-plus" style="color: var(--light-brown); font-size: 3rem;"></i>';
    } else {
        iconEl.innerHTML = '<i class="fas fa-info-circle" style="color: var(--light-brown); font-size: 3rem;"></i>';
    }

    messageEl.textContent = message;

    // Set buttons based on type
    if (type === 'register') {
        buttonsEl.innerHTML = `
            <button class="btn btn-primary" onclick="window.location.href='register.html'">
                Register Now
            </button>
            <button class="btn btn-outline" onclick="closeAuthModal()">
                Cancel
            </button>
        `;
    } else {
        buttonsEl.innerHTML = `
            <button class="btn btn-primary" onclick="closeAuthModal()">
                OK
            </button>
        `;
    }

    modal.style.display = 'flex';
}

// Close modal
function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', () => {
    updateHeaderWithUser();
});

// Export functions for global use
window.registerUser = registerUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
window.isLoggedIn = isLoggedIn;
window.requireLogin = requireLogin;
window.getCurrentUser = getCurrentUser;
window.showAuthModal = showAuthModal;
window.closeAuthModal = closeAuthModal;
window.updateHeaderWithUser = updateHeaderWithUser;
