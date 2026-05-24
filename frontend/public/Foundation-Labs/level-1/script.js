/**
 * Task Assignment Dashboard Controller
 * Handles authentication, date display, and async task loading
 */

// --- DOM Elements ---
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('login-error');
const loginScreen = document.getElementById('login-screen');
const dashboard = document.getElementById('dashboard');
const currentDateEl = document.getElementById('current-date');
const logoutBtn = document.getElementById('logout-btn');
const task1Container = document.getElementById('task-1-container');

// --- Configuration ---
const VALID_CREDENTIALS = {
    employee: 'Automata',
    password: 'AutoLab'
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Check if user was already logged in (for demo persistence within session)
    if (sessionStorage.getItem('isAuthenticated') === 'true') {
        showDashboard();
    }
});

// --- Event Listeners ---

// Login Form Submit
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = usernameInput.value.trim();
    const pass = passwordInput.value;

    if (user === VALID_CREDENTIALS.employee && pass === VALID_CREDENTIALS.password) {
        // Authentication Successful
        handleLoginSuccess();
    } else {
        // Authentication Failed
        handleLoginError();
    }
});

// Logout Button Click
logoutBtn.addEventListener('click', () => {
    handleLogout();
});

// Task Action Buttons (Event Delegation)
document.addEventListener('click', (e) => {
    const target = e.target;

    // Check if clicked element is an action button
    if (target.classList.contains('action-btn')) {
        handleTaskAction(target);
    }
});


// --- Core Functions ---

function handleLoginSuccess() {
    // Store session (optional realism)
    sessionStorage.setItem('isAuthenticated', 'true');

    // UI Updates
    loginError.classList.add('hidden');
    loginScreen.classList.add('hidden');

    showDashboard();
}

function handleLoginError() {
    loginError.classList.remove('hidden');

    // Trigger CSS animation reflow
    loginError.style.animation = 'none';
    void loginError.offsetWidth; // trigger reflow
    loginError.style.animation = null;

    passwordInput.value = ''; // clear password on error
    passwordInput.focus();
}

function handleLogout() {
    sessionStorage.removeItem('isAuthenticated');

    // UI Updates
    dashboard.classList.add('hidden');
    loginScreen.classList.remove('hidden');

    // Reset Form
    loginForm.reset();
    loginError.classList.add('hidden');

    // Reset Delayed Task
    resetDynamicTask();
}

function showDashboard() {
    dashboard.classList.remove('hidden');
    updateDateDisplay();
    triggerDelayedTaskLoad();
}

function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateEl.textContent = new Date().toLocaleDateString('en-US', options);
}

// --- Dynamic Content Loading ---

function triggerDelayedTaskLoad() {
    // Only load if not already loaded
    if (task1Container.querySelector('.task-card')) return;

    // Simulate network delay of 2 seconds
    setTimeout(() => {
        const dynamicTaskHTML = `
            <div class="task-card" data-task-id="T-801">
                <div class="task-header">
                    <div class="task-icon alert-icon">⚡</div>
                    <div class="badge-wrapper">
                        <span class="badge priority-low">Low Priority</span>
                    </div>
                </div>
                <div class="task-body">
                    <h3 class="task-title">Review Access Logs</h3>
                    <div class="task-meta">
                        <span class="meta-icon">🕒</span>
                        <p class="task-time">Assigned: 07:00 AM</p>
                    </div>
                </div>
                <div class="task-footer">
                    <div class="status-indicator">
                        <span class="status pending">Pending Review</span>
                    </div>
                    <div class="action-wrapper">
                        <button class="action-btn start-task">Initiate</button>
                    </div>
                </div>
            </div>
        `;

        // Replace loader with actual content
        task1Container.innerHTML = dynamicTaskHTML;

    }, 2000);
}

function resetDynamicTask() {
    task1Container.innerHTML = `
        <div id="task-1-loader" class="loader-skeleton">
            <div class="spinner"></div>
            <span class="loader-text">Decrypting task payload...</span>
        </div>
    `;
}

// --- Interactions ---

function handleTaskAction(btn) {
    const taskFooter = btn.closest('.task-footer');
    const statusEl = taskFooter.querySelector('.status');

    if (btn.classList.contains('start-task')) {
        // Change to in-progress state
        btn.textContent = 'Complete';
        btn.classList.remove('start-task');
        btn.classList.add('complete-task');

        statusEl.textContent = 'In Progress';
        statusEl.className = 'status in-progress';
    }
    else if (btn.classList.contains('complete-task')) {
        // Change to completed state
        btn.textContent = 'Done';
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';

        statusEl.textContent = 'Completed';
        statusEl.className = 'status';
        statusEl.style.color = 'var(--status-success)';

        // Remove glow effect
        statusEl.style.setProperty('--brand-glow', 'transparent');
        statusEl.style.setProperty('--brand-primary', 'var(--status-success)');
    }
}
