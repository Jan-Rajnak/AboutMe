// Function to load translations from the JSON file
async function loadTranslations(language) {
    const translationsFile = `translations/${language}.json`;

    try {
        const response = await fetch(translationsFile);
        return await response.json();
    } catch (error) {
        console.error(`Error loading translations for ${language}:`, error);
        return {};
    }
}

// Function to apply translations based on the selected language
async function applyTranslations(language) {
    const translations = await loadTranslations(language);
    const elements = document.querySelectorAll('.translatable');

    elements.forEach((element) => {
        const key = element.getAttribute('data-key');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

// Function to handle language change
function changeLanguage() {
    const selectedLanguage = document.getElementById('languageDropdown').value;
    applyTranslations(selectedLanguage);
    saveLanguage(selectedLanguage); // Save selected language
    // Call your custom function with the selected language
    yourCustomFunction(selectedLanguage);
}

// Function to save the selected language to localStorage
function saveLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
}

// Function to get the selected language from localStorage
function getSavedLanguage() {
    return localStorage.getItem('selectedLanguage') || 'en'; // Default to English if not set
}

// Your custom function that gets called when the language changes
function yourCustomFunction(language) {
    // Do something with the selected language
    console.log(`Selected language: ${language}`);
}

// Initialize translations on page load
window.onload = function () {
    const savedLanguage = getSavedLanguage();
    document.getElementById('languageDropdown').value = savedLanguage;
    applyTranslations(savedLanguage); // Set language from localStorage
    // Call your custom function with the selected language
    yourCustomFunction(savedLanguage);
};