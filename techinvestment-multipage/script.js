// Global State
let currentUser = null;
let isBalanceVisible = true;
let collaborators = [
    {
        id: 1,
        name: 'Maria Silva',
        email: 'maria.silva@email.com',
        role: 'Visualizador',
        status: 'Ativo',
        addedDate: '15/08/2024',
        avatar: 'MS'
    },
    {
        id: 2,
        name: 'João Santos',
        email: 'joao.santos@email.com',
        role: 'Editor',
        status: 'Pendente',
        addedDate: '10/09/2024',
        avatar: 'JS'
    },
    {
        id: 3,
        name: 'Ana Costa',
        email: 'ana.costa@email.com',
        role: 'Consultor Financeiro',
        status: 'Ativo',
        addedDate: '02/09/2024',
        avatar: 'AC'
    }
];

// Page Navigation (for multi-page structure)
function navigateToPage(page) {
    window.location.href = page + '.html';
}

// Authentication
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (email && password) {
        // Simulate login
        currentUser = {
            name: 'João Silva',
            email: email,
            avatar: 'JS'
        };
        
        // Save user data
        saveToLocalStorage('currentUser', currentUser);
        
        showLoading();
        setTimeout(() => {
            hideLoading();
            window.location.href = 'dashboard.html';
        }, 1500);
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }
    
    if (name && email && password) {
        // Simulate registration
        currentUser = {
            name: name,
            email: email,
            avatar: name.split(' ').map(n => n[0]).join('').toUpperCase()
        };
        
        // Save user data
        saveToLocalStorage('currentUser', currentUser);
        
        showLoading();
        setTimeout(() => {
            hideLoading();
            window.location.href = 'dashboard.html';
        }, 1500);
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Loading Screen
function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'flex';
    }
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
}

// Password Toggle
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

// Balance Visibility Toggle
function toggleBalance() {
    const balanceElements = document.querySelectorAll('[data-balance]');
    const totalBalance = document.getElementById('total-balance');
    const eyeIcon = document.getElementById('balance-eye');
    
    if (!totalBalance || !eyeIcon) return;
    
    isBalanceVisible = !isBalanceVisible;
    
    if (isBalanceVisible) {
        totalBalance.textContent = 'R$ 11.000,00';
        balanceElements.forEach(el => {
            el.textContent = el.getAttribute('data-balance');
        });
        eyeIcon.className = 'fas fa-eye';
    } else {
        totalBalance.textContent = '••••••';
        balanceElements.forEach(el => {
            el.textContent = '••••••';
        });
        eyeIcon.className = 'fas fa-eye-slash';
    }
    
    // Save preference
    saveToLocalStorage('balanceVisible', isBalanceVisible);
}

// Dropdown Management
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) return;
    
    const isOpen = dropdown.classList.contains('show');
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    // Toggle the clicked dropdown
    if (!isOpen) {
        dropdown.classList.add('show');
    }
}

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
    });
}

// Tab Management
function showTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show target tab content
    const targetTab = document.getElementById(tabId + '-tab');
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

function showSupportTab(tabId) {
    // Hide all support tab contents
    const tabContents = document.querySelectorAll('#support-page .tab-content, .tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all support tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show target tab content
    const targetTab = document.getElementById(tabId + '-support-tab');
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// FAQ Management
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('i');
    const isOpen = answer.classList.contains('show');
    
    // Close all other FAQs
    const allFAQs = document.querySelectorAll('.faq-answer');
    const allButtons = document.querySelectorAll('.faq-question');
    
    allFAQs.forEach(faq => faq.classList.remove('show'));
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // Toggle current FAQ
    if (!isOpen) {
        answer.classList.add('show');
        button.classList.add('active');
    }
}

// Modal Management
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('modal-overlay');
    
    if (modal && overlay) {
        modal.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('modal-overlay');
    
    if (modal && overlay) {
        modal.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    const overlay = document.getElementById('modal-overlay');
    
    modals.forEach(modal => modal.classList.remove('show'));
    if (overlay) {
        overlay.classList.remove('show');
    }
    document.body.style.overflow = 'auto';
}

// Collaboration Management
function handleAddCollaborator(event) {
    event.preventDefault();
    
    const email = document.getElementById('collaborator-email').value;
    const role = document.getElementById('collaborator-role').value;
    
    if (email && role) {
        // Create new collaborator
        const newCollaborator = {
            id: collaborators.length + 1,
            name: email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase()),
            email: email,
            role: role,
            status: 'Pendente',
            addedDate: new Date().toLocaleDateString('pt-BR'),
            avatar: email.split('@')[0].substring(0, 2).toUpperCase()
        };
        
        collaborators.push(newCollaborator);
        
        // Show success message
        alert('Convite enviado com sucesso!');
        
        // Reset form and close modal
        document.getElementById('add-collaborator-form').reset();
        closeModal('add-collaborator-modal');
        
        // Save to localStorage
        saveToLocalStorage('collaborators', collaborators);
    }
}

// Contact Form
function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;
    
    if (name && email && subject && message) {
        // Simulate form submission
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        
        // Reset form
        document.getElementById('contact-form').reset();
    }
}

// Local Storage Management
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return null;
    }
}

// Theme Management
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        body.classList.remove('dark-theme');
        saveToLocalStorage('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        saveToLocalStorage('theme', 'dark');
    }
}

function initializeTheme() {
    const savedTheme = loadFromLocalStorage('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Authentication Check
function checkAuthentication() {
    const currentPage = window.location.pathname.split('/').pop();
    const protectedPages = ['dashboard.html', 'profile.html', 'team.html', 'collaboration.html', 'support.html'];
    
    if (protectedPages.includes(currentPage)) {
        const savedUser = loadFromLocalStorage('currentUser');
        if (!savedUser) {
            window.location.href = 'login.html';
            return false;
        }
        currentUser = savedUser;
    }
    return true;
}

// Initialize Page-Specific Features
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Load saved preferences
    const savedBalance = loadFromLocalStorage('balanceVisible');
    if (savedBalance !== null) {
        isBalanceVisible = savedBalance;
    }
    
    // Load saved collaborators
    const savedCollaborators = loadFromLocalStorage('collaborators');
    if (savedCollaborators) {
        collaborators = savedCollaborators;
    }
    
    // Page-specific initializations
    switch (currentPage) {
        case 'dashboard.html':
            initializeDashboard();
            break;
        case 'profile.html':
            initializeProfile();
            break;
        case 'collaboration.html':
            initializeCollaboration();
            break;
        default:
            break;
    }
}

function initializeDashboard() {
    // Apply balance visibility preference
    if (!isBalanceVisible) {
        toggleBalance();
    }
}

function initializeProfile() {
    // Load user data into profile form
    if (currentUser) {
        const nameInput = document.getElementById('profile-name');
        const emailInput = document.getElementById('profile-email');
        
        if (nameInput) nameInput.value = currentUser.name;
        if (emailInput) emailInput.value = currentUser.email;
    }
}

function initializeCollaboration() {
    // Update collaborator statistics if needed
    console.log('Collaboration page initialized with', collaborators.length, 'collaborators');
}

// Keyboard Navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        // ESC key closes modals and dropdowns
        if (event.key === 'Escape') {
            closeAllModals();
            closeAllDropdowns();
        }
        
        // Enter key on buttons
        if (event.key === 'Enter' && event.target.tagName === 'BUTTON') {
            event.target.click();
        }
    });
}

// Error Handling
window.addEventListener('error', function(event) {
    console.error('JavaScript Error:', event.error);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled Promise Rejection:', event.reason);
});

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication for protected pages
    if (!checkAuthentication()) {
        return;
    }
    
    // Hide loading screen after initial load
    setTimeout(() => {
        hideLoading();
    }, 1000);
    
    // Initialize features
    initializeTheme();
    initializeKeyboardNavigation();
    initializePage();
    
    // Set up event listeners
    document.addEventListener('click', function(event) {
        // Close dropdowns when clicking outside
        if (!event.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });
    
    // Handle form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            // Basic validation is handled by HTML5 required attributes
            // Additional validation can be added here if needed
        });
    });
    
    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('TechInvestment multi-page application initialized successfully!');
});

// Export functions for global access
window.TechInvestment = {
    navigateToPage,
    handleLogin,
    handleRegister,
    logout,
    togglePassword,
    toggleBalance,
    toggleDropdown,
    showTab,
    showSupportTab,
    toggleFAQ,
    openModal,
    closeModal,
    handleAddCollaborator,
    handleContactForm,
    toggleTheme
};
