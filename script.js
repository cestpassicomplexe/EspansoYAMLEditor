/**
 * Espanso Editor Logic
 * Handles File System Access API, YAML parsing/dumping, and UI rendering.
 */

// --- Translations ---
const translations = {
    fr: {
        appTitle: "Espanso YAML Editor",
        headerSubtitle: "Créez vos raccourcis Espanso facilement",
        btnOpen: "Ouvrir",
        btnSave: "Enregistrer",
        btnSaveAs: "Enregistrer sous...",
        btnDropdownTitle: "Plus d'options",
        btnHelpTitle: "Aide",
        statusEmpty: "Prêt. Aucun fichier ouvert.",
        statusOpened: "Fichier ouvert : ",
        statusSaved: "Sauvegardé ! ",
        statusSavedShort: "Enregistré !",
        statusErrorLoading: "Erreur lors de l'ouverture du fichier.",
        statusErrorSaving: "Erreur lors de la sauvegarde.",
        btnAddMatch: "Ajouter un Match",
        welcomeMessage: "Commencez par ouvrir un fichier .yml ou créez un nouveau match.",
        yamlPreviewTitle: "Aperçu YAML",
        btnFormat: "Formater",
        btnFormatTitle: "Formater le code",
        btnCopy: "Copier",
        btnCopyTitle: "Copier le contenu",
        yamlPlaceholder: "# Le contenu YAML apparaîtra ici...",
        editMatch: "Éditer le Match",
        newMatch: "Nouveau Match",
        contentType: "Type de contenu",
        typeSimple: "Texte Simple",
        typeForm: "Formulaire",
        typeDate: "Date",
        triggerLabel: "Déclencheur (Trigger)",
        triggerPlaceholder: ":monraccourci",
        triggerHelp: "Le texte à taper pour déclencher le remplacement (ex: :date)",
        contentLabelReplacement: "Texte de remplacement",
        contentLabelForm: "Contenu du Formulaire",
        contentLabelDate: "Texte (ex: La date est {{mydate}})",
        contentPlaceholder: "Votre texte ici...",
        contentHelp: "Vous pouvez utiliser plusieurs lignes.",
        contentHelpForm: "Utilisez [[nom_variable]] pour créer des champs. Les champs simples (texte) ne nécessitent pas de configuration.",
        contentHelpDate: "Formatez votre date : %d (jour), %m (mois), %Y (année), %H (heure), %M (minute), %A (jour complet), %B (mois complet).",
        specialFieldsTitle: "Champs Spéciaux (Listes, Choix)",
        specialFieldsHelp: "Définissez ici les variables qui nécessitent un menu déroulant ou une liste.",
        btnAddField: "+ Ajouter un champ spécial",
        formPreviewLabel: "Aperçu du formulaire",
        datePreviewLabel: "Aperçu du résultat",
        fieldNamePlaceholder: "Nom variable (ex: choices)",
        removeField: "Supprimer",
        fieldType: "Type",
        fieldChoice: "Choix (Dropdown)",
        fieldList: "Liste (Selection)",
        fieldMultiline: "Texte Multiligne",
        fieldValues: "Valeurs (une par ligne)",
        fieldValuesPlaceholder: "Option 1\nOption 2",
        dateFormatLabel: "Format de la date",
        btnDelete: "Supprimer",
        btnCancel: "Annuler",
        btnSaveMatch: "Valider",
        selectTypeTitle: "Quel type de raccourci ?",
        selectTypeDesc: "Choisissez le format de base. Ce choix ne pourra pas être modifié pour ce raccourci.",
        dateModeNote: "Ce mode est optimisé pour les raccourcis de date simples. Pour un formulaire mixant texte et date, préférez le mode 'Formulaire'.",
        tooltipContentType: "Choisissez si vous voulez un texte simple, un formulaire avec des variables, ou une date automatique.",
        tooltipTrigger: "Le mot-clé (souvent commençant par :) qui déclenchera le remplacement.",
        tooltipContent: "Le texte qui remplacera votre déclencheur. Pour les formulaires, utilisez [[variable]].",
        tooltipSpecialFields: "Configurez ici vos variables de type liste ou choix multiples.",
        tooltipDateFormat: "Codes : %d (jour), %m (mois), %Y (année), %H:%M (heure). Ex : %d/%m/%Y",
        helpModalTitle: "Comment utiliser cet outil ?",
        whatIsEspanso: "Qu'est-ce qu'Espanso ?",
        espansoDesc: "Espanso est un <strong>remplaceur de texte</strong> (text expander). Il surveille ce que vous tapez et remplace instantanément des mots-clés par du contenu plus long, des dates, ou des formulaires complexes.",
        whatIsTool: "À quoi sert cet éditeur ?",
        toolDesc: "Espanso utilise des fichiers .yml pour stocker vos raccourcis. Ce site vous permet de :",
        feature1: "Créer des raccourcis visuellement sans erreur de syntaxe.",
        feature2: "Gérer des formulaires avec choix et listes déroulantes.",
        feature3: "Générer des dates automatiques au bon format.",
        whereToSave: "Où enregistrer vos fichiers ?",
        savePathDesc: "Pour qu'Espanso détecte vos raccourcis, enregistrez votre fichier dans le dossier match de votre configuration :",
        savePathTip: "Astuce : Vous pouvez créer autant de fichiers .yml que vous le souhaitez dans ce dossier pour organiser vos raccourcis par thèmes (ex : pro.yml, perso.yml, etc.).",
        tableOS: "Système",
        tablePath: "Chemin du répertoire /match",
        btnCopyMini: "Copier",
        securityNote: "Note : Pour des raisons de sécurité, les navigateurs ne peuvent pas écrire directement dans vos dossiers système. Enregistrez le fichier sur votre bureau, puis déplacez-le manuellement.",
        btnGotIt: "Compris",
        footerPowered: "Propulsé par",
        footerMadeWith: "Fait avec",
        footerBy: "par",
        alertNoApi: "Votre navigateur ne supporte pas l'API d'accès aux fichiers native.",
        alertTriggerRequired: "Le trigger est obligatoire.",
        alertFormRequired: "Un formulaire doit contenir au moins une variable [[nom_variable]].\n\nExemple : Bonjour [[prenom]], votre email est [[email]]",
        confirmDelete: "Supprimer ce match ?",
        noMatchesFound: "Aucun match trouvé.",
        copied: "Copié !",
        textMultilinePreview: "[texte multiligne...]",
        choicePreview: "[choix]",
        dynamicContent: "(Contenu dynamique)",
        sidebarTitle: "Explorateur",
        btnSortAlpha: "Trier A-Z"
    },
    en: {
        appTitle: "Espanso YAML Editor",
        headerSubtitle: "Create your Espanso shortcuts easily",
        btnOpen: "Open",
        btnSave: "Save",
        btnSaveAs: "Save As...",
        btnDropdownTitle: "More options",
        btnHelpTitle: "Help",
        statusEmpty: "Ready. No file opened.",
        statusOpened: "File opened: ",
        statusSaved: "Saved! ",
        statusSavedShort: "Saved !",
        statusErrorLoading: "Error loading file.",
        statusErrorSaving: "Error saving file.",
        btnAddMatch: "Add a Match",
        welcomeMessage: "Start by opening a .yml file or create a new match.",
        yamlPreviewTitle: "YAML Preview",
        btnFormat: "Format",
        btnFormatTitle: "Format code",
        btnCopy: "Copy",
        btnCopyTitle: "Copy content",
        yamlPlaceholder: "# YAML content will appear here...",
        editMatch: "Edit Match",
        newMatch: "New Match",
        contentType: "Content Type",
        typeSimple: "Simple Text",
        typeForm: "Form",
        typeDate: "Date",
        triggerLabel: "Trigger",
        triggerPlaceholder: ":myshortcut",
        triggerHelp: "The text to type to trigger replacement (ex: :date)",
        contentLabelReplacement: "Replacement Text",
        contentLabelForm: "Form Content",
        contentLabelDate: "Text (ex: The date is {{mydate}})",
        contentPlaceholder: "Your text here...",
        contentHelp: "You can use multiple lines.",
        contentHelpForm: "Use [[variable_name]] to create fields. Simple fields (text) don't need configuration.",
        contentHelpDate: "Format your date: %d (day), %m (month), %Y (year), %H (hour), %M (minute), %A (full day), %B (full month).",
        specialFieldsTitle: "Special Fields (Lists, Choices)",
        specialFieldsHelp: "Define variables that require a dropdown menu or a list here.",
        btnAddField: "+ Add a special field",
        formPreviewLabel: "Form preview",
        datePreviewLabel: "Result preview",
        fieldNamePlaceholder: "Variable name (ex: choices)",
        removeField: "Delete",
        fieldType: "Type",
        fieldChoice: "Choice (Dropdown)",
        fieldList: "List (Selection)",
        fieldMultiline: "Multiline Text",
        fieldValues: "Values (one per line)",
        fieldValuesPlaceholder: "Option 1\nOption 2",
        dateFormatLabel: "Date Format",
        btnDelete: "Delete",
        btnCancel: "Cancel",
        btnSaveMatch: "Apply",
        selectTypeTitle: "What type of shortcut?",
        selectTypeDesc: "Choose the base format. This choice cannot be changed for this shortcut.",
        dateModeNote: "This mode is optimized for simple date shortcuts. For a form mixing text and dates, use the 'Form' mode instead.",
        tooltipContentType: "Choose between simple text, a form with variables, or an automatic date.",
        tooltipTrigger: "The keyword (often starting with :) that will trigger the replacement.",
        tooltipContent: "The text that will replace your trigger. For forms, use [[variable]].",
        tooltipSpecialFields: "Configure your list or multiple-choice variables here.",
        tooltipDateFormat: "Codes: %d (day), %m (month), %Y (year), %H:%M (hour). E.g.: %d/%m/%Y",
        helpModalTitle: "How to use this tool?",
        whatIsEspanso: "What is Espanso?",
        espansoDesc: "Espanso is a <strong>text expander</strong>. It monitors what you type and instantly replaces keywords with longer content, dates, or complex forms.",
        whatIsTool: "What is this editor for?",
        toolDesc: "Espanso uses .yml files to store your shortcuts. This site allows you to:",
        feature1: "Create shortcuts visually without syntax errors.",
        feature2: "Manage forms with dropdown choices and lists.",
        feature3: "Generate automatic dates in the correct format.",
        whereToSave: "Where to save your files?",
        savePathDesc: "To make Espanso detect your shortcuts, save your file in the match folder of your configuration:",
        savePathTip: "Tip: You can create as many .yml files as you want in this folder to organize your shortcuts by theme (e.g., work.yml, personal.yml, etc.).",
        tableOS: "System",
        tablePath: "/match folder path",
        btnCopyMini: "Copy",
        securityNote: "Note: For security reasons, browsers cannot write directly to your system folders. Save the file to your desktop, then move it manually.",
        btnGotIt: "Got it",
        footerPowered: "Powered by",
        footerMadeWith: "Made with",
        footerBy: "by",
        alertNoApi: "Your browser does not support the native file access API.",
        alertTriggerRequired: "Trigger is mandatory.",
        alertFormRequired: "A form must contain at least one [[variable_name]] variable.\n\nExample: Hello [[firstname]], your email is [[email]]",
        confirmDelete: "Delete this match?",
        noMatchesFound: "No matches found.",
        copied: "Copied!",
        textMultilinePreview: "[multiline text...]",
        choicePreview: "[choice]",
        dynamicContent: "(Dynamic content)",
        sidebarTitle: "Explorer",
        btnSortAlpha: "Sort A-Z"
    }
};

// Global State
let currentMatches = [];
let fileHandle = null;
let currentLang = 'fr';

// DOM Elements
const dom = {
    matchesList: document.getElementById('matchesList'),
    statusMessage: document.getElementById('statusMessage'),
    btnLoad: document.getElementById('btnLoad'),
    btnSave: document.getElementById('btnSave'),
    btnSaveAs: document.getElementById('btnSaveAs'),
    btnDropdown: document.getElementById('btnDropdown'),
    saveDropdown: document.getElementById('saveDropdown'),
    btnAdd: document.getElementById('btnAdd'),
    sidebarList: document.getElementById('sidebarList'),
    btnHelp: document.getElementById('btnHelp'),

    // Help Modal
    helpModal: document.getElementById('helpModal'),
    btnCloseHelp: document.getElementById('btnCloseHelp'),
    btnCloseHelpFooter: document.getElementById('btnCloseHelpFooter'),

    // Editor Modal
    editorModal: document.getElementById('editorModal'),
    modalTitle: document.getElementById('modalTitle'),
    btnCloseModal: document.getElementById('btnCloseModal'),
    btnCancel: document.getElementById('btnCancel'),
    btnSaveMatch: document.getElementById('btnSaveMatch'),
    btnDeleteMatch: document.getElementById('btnDeleteMatch'),
    typeOverlay: document.getElementById('typeOverlay'),
    typeButtons: document.querySelectorAll('.type-btn-large'),

    // Inputs
    triggerInput: document.getElementById('triggerInput'),
    contentInput: document.getElementById('contentInput'),
    contentLabel: document.getElementById('contentLabel'),
    contentHelp: document.getElementById('contentHelp'),
    dateFormat: document.getElementById('dateFormat'),
    datePreview: document.getElementById('datePreview'),

    // Sections
    contentSection: document.getElementById('contentSection'),
    formFieldsSection: document.getElementById('formFieldsSection'),
    dateSection: document.getElementById('dateSection'),

    // Visual Builder
    fieldsList: document.getElementById('fieldsList'),
    btnAddField: document.getElementById('btnAddField'),
    fieldRowTemplate: document.getElementById('fieldRowTemplate'),
    formPreview: document.getElementById('formPreview'),
    formPreviewContent: document.getElementById('formPreviewContent'),

    // Radios
    typeRadios: document.getElementsByName('matchType'),

    // Live Preview
    yamlEditor: document.getElementById('yamlEditor'),
    btnFormatYaml: document.getElementById('btnFormatYaml'),
    btnCopyYaml: document.getElementById('btnCopyYaml'),

    // Lang buttons
    langBtns: document.querySelectorAll('.lang-btn'),
    btnSortAlpha: document.getElementById('btnSortAlpha')
};

// --- Initialization ---
function init() {
    // Load lang from localStorage
    const savedLang = localStorage.getItem('espanso_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }

    updateLanguageUI();
    setupEventListeners();
    renderMatches();
    updateYamlPreview();
    updateDatePreview();
}

function setupEventListeners() {
    dom.btnLoad.addEventListener('click', loadFile);
    dom.btnSave.addEventListener('click', (e) => saveFile(e.currentTarget));
    dom.btnSaveAs.addEventListener('click', (e) => {
        saveFileAs(e.currentTarget);
        closeDropdown();
    });
    dom.btnDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        dom.saveDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', closeDropdown);
    dom.btnAdd.addEventListener('click', () => openEditor());

    dom.btnCloseModal.addEventListener('click', closeEditor);
    dom.btnCancel.addEventListener('click', closeEditor);

    // Help
    dom.btnHelp.addEventListener('click', openHelp);
    dom.btnCloseHelp.addEventListener('click', closeHelp);
    dom.btnCloseHelpFooter.addEventListener('click', closeHelp);

    // Initial Type Selection
    dom.typeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            setMatchType(type);
            updateEditorFields();
            dom.typeOverlay.classList.add('hidden');
        });
    });

    // Visual Builder
    dom.btnAddField.addEventListener('click', () => addFieldRow());

    // Form/Date content input - update preview on change
    dom.contentInput.addEventListener('input', () => {
        updateFormPreview();
        updateDatePreview();
    });

    // Date Preview
    dom.dateFormat.addEventListener('input', updateDatePreview);

    // Dynamic Form Handling
    Array.from(dom.typeRadios).forEach(radio => {
        radio.addEventListener('change', updateEditorFields);
    });

    // Live Preview
    dom.yamlEditor.addEventListener('input', handleYamlEditorInput);
    dom.btnFormatYaml.addEventListener('click', formatYamlPreview);
    dom.btnCopyYaml.addEventListener('click', copyYamlContent);

    // Lang Switchers
    dom.langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            localStorage.setItem('espanso_lang', currentLang);
            updateLanguageUI();

            // Re-render things that depend on lang
            renderMatches();
            updateEditorFields();
            updateFormPreview();
        });
    });

    if (dom.btnSortAlpha) {
        dom.btnSortAlpha.addEventListener('click', () => sortMatchesAlphabetically());
    }

    initTooltips();
}


// --- Tooltips Logic ---
let globalTooltip = null;

function initTooltips() {
    // Create global tooltip if not exists
    if (!document.querySelector('.global-tooltip')) {
        globalTooltip = document.createElement('div');
        globalTooltip.className = 'global-tooltip';
        document.body.appendChild(globalTooltip);
    } else {
        globalTooltip = document.querySelector('.global-tooltip');
    }

    // Delegate mouseover/mouseout
    document.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('tooltip-icon')) {
            const text = e.target.getAttribute('data-tooltip');
            if (text) {
                showGlobalTooltip(e.target, text);
            }
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('tooltip-icon')) {
            hideGlobalTooltip();
        }
    });

    // Hide on scroll to prevent detachment
    document.addEventListener('scroll', hideGlobalTooltip, true);
    window.addEventListener('resize', hideGlobalTooltip);
}

function showGlobalTooltip(target, text) {
    if (!globalTooltip) return;

    globalTooltip.textContent = text;
    globalTooltip.classList.add('visible');

    const rect = target.getBoundingClientRect();
    const tooltipRect = globalTooltip.getBoundingClientRect();

    // Position above centered
    let top = rect.top - tooltipRect.height - 10;
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);

    // Keep within viewport
    // Check Top
    if (top < 10) {
        // Not enough space above, show below
        top = rect.bottom + 10;
    }

    // Check Left
    if (left < 10) left = 10;

    // Check Right
    if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
    }

    globalTooltip.style.top = `${top}px`;
    globalTooltip.style.left = `${left}px`;
}

function hideGlobalTooltip() {
    if (globalTooltip) {
        globalTooltip.classList.remove('visible');
    }
}

// --- I18n Logic ---

function updateLanguageUI() {
    const t = translations[currentLang];

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        // Skip buttons in feedback state to avoid flickering
        if (el.closest('.btn-feedback-active')) return;

        const key = el.dataset.i18n;
        if (t[key]) {
            // Handle HTML if it's the help modal description
            if (key === 'espansoDesc') {
                el.innerHTML = t[key];
            } else {
                el.innerText = t[key];
            }
        }
    });

    // Update data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Update data-i18n-title elements
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.dataset.i18nTitle;
        if (t[key]) {
            el.title = t[key];
        }
    });

    // Update data-i18n-tooltip elements
    document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
        const key = el.dataset.i18nTooltip;
        if (t[key]) {
            el.setAttribute('data-tooltip', t[key]);
        }
    });

    // Update active button
    dom.langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    // Update Large buttons in overlay
    document.querySelectorAll('.type-btn-large').forEach(btn => {
        const type = btn.dataset.type;
        const key = 'type' + type.charAt(0).toUpperCase() + type.slice(1);
        const span = btn.querySelector('span');
        if (span && t[key]) span.innerText = t[key];
    });

    // Update status bar if it's empty
    if (!fileHandle) {
        dom.statusMessage.innerText = t.statusEmpty;
    }
}

function t(key) {
    return translations[currentLang][key] || key;
}

function closeDropdown() {
    if (dom.saveDropdown) {
        dom.saveDropdown.classList.add('hidden');
    }
}

// --- Help Logic ---

function openHelp() {
    dom.helpModal.classList.remove('hidden');
}

function closeHelp() {
    dom.helpModal.classList.add('hidden');
}

function copyText(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        showFeedback(btn, 'copied');
    });
}

/**
 * Shows temporary feedback on a button
 */
function showFeedback(btn, key) {
    const span = btn.querySelector('span[data-i18n]') || btn;
    const originalKey = span.getAttribute('data-i18n');

    btn.classList.add('btn-feedback-active');
    span.innerText = translations[currentLang][key] || key;

    setTimeout(() => {
        btn.classList.remove('btn-feedback-active');
        // Restore official translation
        if (originalKey) {
            span.innerText = translations[currentLang][originalKey];
        }
    }, 2000);
}

// --- File System Logic ---

async function loadFile() {
    try {
        if (!window.showOpenFilePicker) {
            alert(t('alertNoApi'));
            return;
        }

        const [handle] = await window.showOpenFilePicker({
            types: [{
                description: 'Espanso YAML Files',
                accept: { 'text/yaml': ['.yml', '.yaml'] },
            }],
        });

        fileHandle = handle;
        const file = await fileHandle.getFile();
        const text = await file.text();

        parseYaml(text);
        dom.statusMessage.innerText = `${t('statusOpened')}${file.name}`;
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error('Error loading file:', err);
            alert(t('statusErrorLoading'));
        }
    }
}

async function saveFile(btn = dom.btnSave) {
    if (!fileHandle) {
        saveFileAs(btn);
        return;
    }

    try {
        const writable = await fileHandle.createWritable();
        const yamlContent = generateYaml();
        await writable.write(yamlContent);
        await writable.close();
        dom.statusMessage.innerText = `${t('statusOpened')}${fileHandle.name} (${new Date().toLocaleTimeString()})`;

        showFeedback(btn, 'statusSavedShort');
    } catch (err) {
        console.error('Error saving file:', err);
        alert(t('statusErrorSaving'));
    }
}

async function saveFileAs(btn = dom.btnSaveAs) {
    try {
        const handle = await window.showSaveFilePicker({
            types: [{
                description: 'Espanso YAML File',
                accept: { 'text/yaml': ['.yml'] },
            }],
        });

        fileHandle = handle;
        await saveFile(btn);
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error('Error saving file:', err);
        }
    }
}

// --- Data Parsing/Generation ---

function parseYaml(text) {
    try {
        const data = jsyaml.load(text);
        if (data && data.matches) {
            currentMatches = data.matches;
        } else {
            currentMatches = [];
            console.warn('No matches found or invalid structure');
        }
        renderMatches();
        updateYamlPreview(); // Sync preview
    } catch (e) {
        alert(t('statusErrorLoading') + ' : ' + e.message);
    }
}

function generateYaml() {
    const data = {
        matches: currentMatches
    };

    const header = `# espanso match file
# Generated by Espanso Editor

matches:
`;

    if (!currentMatches || currentMatches.length === 0) {
        return header;
    }

    const yamlBody = jsyaml.dump(data.matches, {
        indent: 2,
        lineWidth: -1,
        quotingType: '"',
        noRefs: true
    });

    // Indent every line with 2 spaces to align under "matches:"
    const indentedBody = yamlBody.split('\n').map(line => line ? '  ' + line : line).join('\n');

    return header + indentedBody;
}

// --- Drag and Drop Logic ---
let draggedIndex = null;

function handleDragStart(e, index) {
    draggedIndex = index;
    e.dataTransfer.effectAllowed = 'move';
    e.target.classList.add('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const target = e.target.closest('.sidebar-item');
    if (target) {
        target.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    const target = e.target.closest('.sidebar-item');
    if (target) {
        target.classList.remove('drag-over');
    }
}

function handleDrop(e, targetIndex) {
    e.preventDefault();
    const target = e.target.closest('.sidebar-item');
    if (target) {
        target.classList.remove('drag-over');
    }

    if (draggedIndex === null || draggedIndex === targetIndex) return;

    // Reorder array
    const item = currentMatches.splice(draggedIndex, 1)[0];
    currentMatches.splice(targetIndex, 0, item);

    renderMatches(targetIndex);
    updateYamlPreview();
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedIndex = null;
}

function sortMatchesAlphabetically() {
    if (!currentMatches || currentMatches.length < 2) return;

    currentMatches.sort((a, b) => {
        const triggerA = (a.trigger || "").toLowerCase();
        const triggerB = (b.trigger || "").toLowerCase();
        return triggerA.localeCompare(triggerB);
    });

    renderMatches();
    updateYamlPreview();
}

// --- UI Rendering ---

function renderMatches(highlightIndex = -1) {
    dom.matchesList.innerHTML = '';
    renderSidebar(highlightIndex);

    if (!currentMatches || currentMatches.length === 0) {
        dom.matchesList.innerHTML = `<div class="empty-state"><p>${t('noMatchesFound')}</p></div>`;
        return;
    }

    currentMatches.forEach((match, index) => {
        const card = createMatchCard(match, index);
        if (index === highlightIndex) {
            card.classList.add('selected');
        }
        dom.matchesList.appendChild(card);
    });

    if (highlightIndex !== -1) {
        const selectedEl = dom.matchesList.children[highlightIndex];
        if (selectedEl) {
            selectedEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

function renderSidebar(highlightIndex = -1) {
    if (!dom.sidebarList) return;
    dom.sidebarList.innerHTML = '';

    if (!currentMatches || currentMatches.length === 0) {
        return;
    }

    currentMatches.forEach((match, index) => {
        const item = document.createElement('div');
        item.className = 'sidebar-item';
        item.draggable = true;
        if (index === highlightIndex) {
            item.classList.add('selected');
        }
        item.innerText = match.trigger || `(Match ${index + 1})`;
        item.title = match.trigger;

        // Navigation
        item.onclick = (e) => {
            e.stopPropagation();
            renderMatches(index);
        };

        // Drag events
        item.addEventListener('dragstart', (e) => handleDragStart(e, index));
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('drop', (e) => handleDrop(e, index));
        item.addEventListener('dragend', handleDragEnd);

        dom.sidebarList.appendChild(item);
    });
}

function createMatchCard(match, index) {
    const el = document.createElement('div');
    el.className = 'match-card';
    el.onclick = () => openEditor(index);

    let type = t('typeSimple');
    let contentPreview = match.replace;

    if (match.form) {
        type = t('typeForm');
        contentPreview = match.form;
    } else if (match.vars && match.vars.some(v => v.type === 'date')) {
        type = t('typeDate');
    }

    if (contentPreview && contentPreview.length > 150) {
        contentPreview = contentPreview.substring(0, 150) + '...';
    }

    el.innerHTML = `
        <div class="match-header">
            <span class="trigger-badge">${escapeHtml(match.trigger)}</span>
            <span class="type-badge">${type}</span>
        </div>
        <div class="match-content">${escapeHtml(contentPreview || t('dynamicContent'))}</div>
    `;

    return el;
}

function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// --- Editor Logic ---

let editingIndex = -1;
let editorBuffers = { simple: '', form: '', date: '{{mydate}}' };
let lastEditorType = 'simple';
let isPopulating = false;

function openEditor(index = -1) {
    editingIndex = index;
    dom.editorModal.classList.remove('hidden');

    // Reset handlers
    dom.btnSaveMatch.onclick = saveMatchFromEditor;
    dom.btnDeleteMatch.onclick = deleteMatchFromEditor;

    // Initialize session buffers
    editorBuffers = { simple: '', form: '', date: '{{mydate}}' };
    lastEditorType = 'simple';
    isPopulating = true;

    if (index === -1) {
        dom.modalTitle.innerText = t('newMatch');
        dom.btnDeleteMatch.classList.add('hidden');
        dom.typeOverlay.classList.remove('hidden'); // Show selection first
        setMatchType('simple');
        resetEditorFields();
    } else {
        dom.modalTitle.innerText = t('editMatch');
        dom.btnDeleteMatch.classList.remove('hidden');
        dom.typeOverlay.classList.add('hidden'); // Hide selection
        populateEditor(currentMatches[index]);
    }
    isPopulating = false;
}

function closeEditor() {
    dom.editorModal.classList.add('hidden');
}

function resetEditorFields() {
    dom.triggerInput.value = '';
    dom.contentInput.value = '';
    dom.dateFormat.value = '%d/%m/%Y';

    // Clear Visual Builder
    dom.fieldsList.innerHTML = '';

    setMatchType('simple');
    updateEditorFields();
}

function setMatchType(type) {
    Array.from(dom.typeRadios).forEach(r => {
        r.checked = (r.value === type);
    });
}

function getMatchType() {
    return Array.from(dom.typeRadios).find(r => r.checked)?.value || 'simple';
}

function updateEditorFields() {
    const type = getMatchType();

    // Buffering Logic: Save current text to the buffer of the type we just LEFT
    if (!isPopulating && lastEditorType !== type) {
        editorBuffers[lastEditorType] = dom.contentInput.value;
        // Restore/Set text for the NEW type
        dom.contentInput.value = editorBuffers[type] || (type === 'date' ? '{{mydate}}' : '');
    }
    lastEditorType = type;


    // Default visibility
    dom.contentSection.classList.remove('hidden');
    dom.formFieldsSection.classList.add('hidden');
    dom.dateSection.classList.add('hidden');
    dom.contentHelp.innerText = t('contentHelp');

    if (type === 'date') {
        dom.contentLabel.innerText = t('contentLabelDate');
        dom.contentSection.classList.remove('hidden');
        dom.dateSection.classList.remove('hidden');
        dom.contentHelp.innerText = t('contentHelpDate');
    } else if (type === 'form') {
        dom.contentLabel.innerText = t('contentLabelForm');
        dom.contentHelp.innerText = t('contentHelpForm');
        dom.formFieldsSection.classList.remove('hidden');
    } else {
        dom.contentLabel.innerText = t('contentLabelReplacement');
    }

    // Update form preview visibility
    updateFormPreview();
    updateDatePreview();
}

function populateEditor(match) {
    dom.triggerInput.value = match.trigger;

    let type = 'simple';
    if (match.form) {
        type = 'form';
        dom.contentInput.value = match.form;

        // Populate Visual Builder
        dom.fieldsList.innerHTML = '';
        if (match.form_fields) {
            Object.keys(match.form_fields).forEach(key => {
                const fieldData = match.form_fields[key];
                addFieldRow(key, fieldData);
            });
        }
    } else {
        dom.contentInput.value = match.replace;
        if (match.vars) {
            const dateVar = match.vars.find(v => v.type === 'date');

            if (dateVar) {
                type = 'date';
                if (dateVar.params && dateVar.params.format) {
                    dom.dateFormat.value = dateVar.params.format;
                }
            }
        }
    }

    setMatchType(type);

    // Fill the specific buffer for the loaded type
    editorBuffers[type] = dom.contentInput.value;

    updateEditorFields();
}

// --- Visual Builder Logic ---

function addFieldRow(name = '', data = null) {
    const template = dom.fieldRowTemplate.content.cloneNode(true);
    const row = template.querySelector('.field-row');

    const nameInput = row.querySelector('.field-name');
    const typeSelect = row.querySelector('.field-type');
    const valuesInput = row.querySelector('.field-values');
    const removeBtn = row.querySelector('.remove-field');

    // Remove Handler
    removeBtn.onclick = () => {
        row.remove();
        updateFormPreview();
    };

    // Auto-generate name if not provided (for new fields)
    if (!name || typeof name !== 'string') {
        // Count existing fields to generate unique name
        const existingFields = dom.fieldsList.querySelectorAll('.field-row');
        let counter = existingFields.length + 1;
        let proposedName = `field${counter}`;

        // Check if name already exists
        const existingNames = Array.from(existingFields).map(r =>
            r.querySelector('.field-name').value.trim()
        );

        while (existingNames.includes(proposedName)) {
            counter++;
            proposedName = `field${counter}`;
        }

        name = proposedName;
    }

    nameInput.value = name;

    if (data) {
        if (data.type) typeSelect.value = data.type;

        // Handle multiline which translates to a specific UI type
        if (data.multiline) {
            typeSelect.value = 'text_multiline';
        }

        // Handle date type for form fields
        if (data.type === 'date') {
            typeSelect.value = 'date';
        }

        if (data.format) {
            valuesInput.value = data.format;
        }

        // Handle values which might be an array in YAML object
        if (Array.isArray(data.values)) {
            valuesInput.value = data.values.join('\n');
        } else if (typeof data.values === 'string') {
            // If user previously used text block with pipes, try to normalize
            // Espanso usually expects list, but let's just show text
            valuesInput.value = data.values;
        }
    }

    // Handle visibility of values based on type
    let lastType = typeSelect.value;
    const toggleValues = () => {
        const type = typeSelect.value;
        const needsValues = (type === 'choice' || type === 'list');
        const isDate = (type === 'date');

        // Clear value if switching between incompatible uses of the values field
        if (lastType !== type) {
            const wasDate = (lastType === 'date');
            const wasSelection = (lastType === 'choice' || lastType === 'list');

            if ((wasDate && needsValues) || (isDate && wasSelection)) {
                valuesInput.value = '';
            }
            lastType = type;
        }

        valuesInput.parentElement.style.visibility = (needsValues || isDate) ? 'visible' : 'hidden';

        if (isDate) {
            valuesInput.parentElement.style.visibility = 'visible';
            valuesInput.placeholder = "%d/%m/%Y";
            // Find the label for values and change it
            const label = valuesInput.parentElement.querySelector('label');
            if (label) label.innerText = t('dateFormatLabel');

            // Add date format reminder if not present
            let hint = valuesInput.parentElement.querySelector('.date-hint');
            if (!hint) {
                hint = document.createElement('small');
                hint.className = 'date-hint';
                hint.style.display = 'block';
                hint.style.marginTop = '4px';
                hint.style.fontSize = '0.75rem';
                hint.style.color = 'var(--text-secondary)';
                hint.innerHTML = '%d(jour), %m(mois), %Y(année), %H:%M';
                valuesInput.parentElement.appendChild(hint);
            }
            hint.style.display = 'block';
        } else {
            const label = valuesInput.parentElement.querySelector('label');
            if (label) label.innerText = t('fieldValues');
            const hint = valuesInput.parentElement.querySelector('.date-hint');
            if (hint) hint.style.display = 'none';
        }

        if (!needsValues && !isDate) valuesInput.value = '';
    };
    typeSelect.addEventListener('change', toggleValues);
    toggleValues(); // Init

    // Add event listeners for live preview updates
    nameInput.addEventListener('input', updateFormPreview);
    typeSelect.addEventListener('change', updateFormPreview);
    valuesInput.addEventListener('input', updateFormPreview);

    dom.fieldsList.appendChild(row);

    // Auto-insert [[fieldname]] into content if this is a new field (not from existing data)
    if (!data && getMatchType() === 'form') {
        const currentContent = dom.contentInput.value;
        if (currentContent.length > 0 && !currentContent.endsWith('\n')) {
            dom.contentInput.value += '\n';
        }
        dom.contentInput.value += `${name}: [[${name}]]`;
        updateFormPreview();
    }
}

function getFormFieldsFromUI() {
    const fields = {};
    const rows = dom.fieldsList.querySelectorAll('.field-row');
    const usedNames = new Set();

    rows.forEach(row => {
        let name = row.querySelector('.field-name').value.trim();
        const type = row.querySelector('.field-type').value;
        const valuesText = row.querySelector('.field-values').value;

        // Skip if somehow still empty (shouldn't happen with auto-generation at creation)
        if (!name) {
            console.warn('Field without name detected, skipping.');
            return;
        }

        // Handle duplicates by renaming
        if (usedNames.has(name)) {
            console.warn(`Duplicate field name "${name}" detected.`);
            let counter = 2;
            let uniqueName = `${name}_${counter}`;
            while (usedNames.has(uniqueName)) {
                counter++;
                uniqueName = `${name}_${counter}`;
            }
            name = uniqueName;
            row.querySelector('.field-name').value = name;
        }

        usedNames.add(name);

        if (type === 'text_multiline') {
            fields[name] = {
                type: 'text',
                multiline: true
            };
        } else if (type === 'choice' || type === 'list') {
            // Convert text lines to array for YAML
            const valuesArray = valuesText.split('\n').map(l => l.trim()).filter(l => l.length > 0);

            // Skip if no values provided for choice/list
            if (valuesArray.length === 0) {
                console.warn(`Field "${name}" of type "${type}" has no values, skipping.`);
                return;
            }

            fields[name] = {
                type: type,
                values: valuesArray
            };
        } else if (type === 'date') {
            fields[name] = {
                type: 'date',
                format: valuesText.trim() || '%d/%m/%Y'
            };
        } else {
            // For other types (like 'text'), no values needed
            fields[name] = {
                type: type
            };
        }
    });

    return fields; // Return empty object if no fields, not null (easier for merging)
}


// --- Saving Logic ---

function saveMatchFromEditor() {
    const type = getMatchType();
    const trigger = dom.triggerInput.value;
    let content = dom.contentInput.value;

    if (!trigger) {
        alert(t('alertTriggerRequired'));
        return;
    }

    const newMatch = {
        trigger: trigger
    };

    if (type === 'simple') {
        newMatch.replace = content;
    } else if (type === 'form') {

        // 1. Get explicitly configured fields from UI
        const configuredFields = getFormFieldsFromUI() || {};

        // 2. Synchronization: Ensure all configured fields exist in the content
        // "Toute clé définie sous form_fields doit obligatoirement apparaître dans le texte"
        Object.keys(configuredFields).forEach(fieldName => {
            // Regex to find [[fieldName]] with optional whitespace
            const pattern = new RegExp(`\\[\\[\\s*${fieldName}\\s*\\]\\]`);
            if (!pattern.test(content)) {
                // If missing, append it logically
                if (content.length > 0 && !content.endsWith('\n')) {
                    content += '\n';
                }
                content += `${fieldName}: [[${fieldName}]]`;
            }
        });

        // Update the main content variable (and thus the match)
        newMatch.form = content;

        // 3. Extract variables from content [[varname]] to capture anything NOT in UI
        const regex = /\[\[\s*([a-zA-Z0-9_\-]+)\s*\]\]/g;
        let match;
        const detectedVars = new Set();
        while ((match = regex.exec(content)) !== null) {
            detectedVars.add(match[1]);
        }

        // 4. Merge: Default to type: 'text' for any detected var not in UI
        const finalFormFields = {};
        const finalVars = [];

        // Add all configured fields first
        Object.keys(configuredFields).forEach(varName => {
            const field = configuredFields[varName];
            if (field.type === 'date') {
                finalVars.push({
                    name: varName,
                    type: 'date',
                    params: { format: field.format }
                });
            } else {
                finalFormFields[varName] = field;
            }
        });

        // Add missing detected variables as simple text
        detectedVars.forEach(varName => {
            if (!finalFormFields[varName] && !finalVars.find(v => v.name === varName)) {
                finalFormFields[varName] = { type: 'text' };
            }
        });

        // Only add form_fields if we actually have fields
        if (Object.keys(finalFormFields).length > 0) {
            newMatch.form_fields = finalFormFields;
        }

        if (finalVars.length > 0) {
            newMatch.vars = finalVars;
        }

        if (Object.keys(finalFormFields).length === 0 && finalVars.length === 0) {
            // No variables detected - this is likely an error
            alert(t('alertFormRequired'));
            return;
        }

    } else if (type === 'date') {
        newMatch.replace = content;
        newMatch.vars = [{
            name: "mydate",
            type: "date",
            params: { format: dom.dateFormat.value }
        }];
    }

    if (editingIndex === -1) {
        currentMatches.push(newMatch);
    } else {
        currentMatches[editingIndex] = newMatch;
    }

    const targetIndex = (editingIndex === -1) ? currentMatches.length - 1 : editingIndex;
    closeEditor();
    renderMatches(targetIndex);
    updateYamlPreview();
}

function deleteMatchFromEditor() {
    if (editingIndex !== -1) {
        if (confirm(t('confirmDelete'))) {
            currentMatches.splice(editingIndex, 1);
            renderMatches();
            updateYamlPreview();
            closeEditor();
        }
    }
}

// --- Live Preview Logic ---

function updateYamlPreview() {
    // Avoid recursion if we are currently editing the text area
    if (document.activeElement === dom.yamlEditor) return;

    const yaml = generateYaml();
    dom.yamlEditor.value = yaml;
}

function handleYamlEditorInput() {
    const text = dom.yamlEditor.value;
    try {
        const data = jsyaml.load(text);
        if (data && data.matches) {
            currentMatches = data.matches;
            renderMatches(); // Update visual list only
            // Do NOT call updateYamlPreview here to avoid cursor jumping
        }
    } catch (e) {
        // Allow invalid YAML while typing, just don't update visual view
        // console.warn("Invalid YAML during edit", e);
    }
}

function formatYamlPreview() {
    const yaml = generateYaml();
    dom.yamlEditor.value = yaml;
}

function copyYamlContent() {
    navigator.clipboard.writeText(dom.yamlEditor.value).then(() => {
        const btn = dom.btnCopyYaml;

        // Simple visual feedback
        const originalContent = btn.innerHTML;
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> ${t('copied')}`;

        setTimeout(() => {
            btn.innerHTML = originalContent;
        }, 2000);
    });
}

// --- Form Preview Logic ---

function updateFormPreview() {
    // Only show preview for form type
    if (getMatchType() !== 'form') {
        dom.formPreview.classList.add('hidden');
        return;
    }

    const formText = dom.contentInput.value;
    if (!formText) {
        dom.formPreview.classList.add('hidden');
        return;
    }

    // Show preview
    dom.formPreview.classList.remove('hidden');

    // Get all configured fields
    const fields = getFormFieldsFromUI();
    let previewText = formText;

    // Replace each [[variable]] with example values
    Object.keys(fields).forEach(fieldName => {
        const fieldData = fields[fieldName];
        const pattern = new RegExp(`\\[\\[\\s*${fieldName}\\s*\\]\\]`, 'g');

        let exampleValue = '';
        if (fieldData.type === 'choice' || fieldData.type === 'list') {
            // Show first value as example
            if (fieldData.values && fieldData.values.length > 0) {
                exampleValue = `[${fieldData.values[0]}]`;
            } else {
                exampleValue = t('choicePreview');
            }
        } else if (fieldData.multiline) {
            exampleValue = t('textMultilinePreview');
        } else {
            exampleValue = `[${fieldName}]`;
        }

        previewText = previewText.replace(pattern, exampleValue);
    });

    // Also handle any variables not in configured fields
    previewText = previewText.replace(/\[\[\s*([a-zA-Z0-9_\-]+)\s*\]\]/g, '[$1]');

    dom.formPreviewContent.innerHTML = '';

    // Regex to split by [[variable]]
    // Capturing parenthesis () keep the delimiter in the result array
    const parts = formText.split(/(\[\[\s*[a-zA-Z0-9_\-]+\s*\]\])/g);

    const checkContainer = document.createElement('div');
    checkContainer.className = 'preview-inline-container';

    parts.forEach(part => {
        const varMatch = part.match(/^\[\[\s*([a-zA-Z0-9_\-]+)\s*\]\]$/);

        if (varMatch) {
            // It's a variable [[name]]
            const varName = varMatch[1];
            const fieldData = fields[varName] || { type: 'text' };

            const wrapper = document.createElement('span');
            wrapper.className = 'inline-field-wrapper';

            // Add a small label above or placeholder
            // For inline style, placeholder inside is cleaner, or simple tooltip

            let input;

            if (fieldData.type === 'choice' || fieldData.type === 'list') {
                input = document.createElement('select');
                input.className = 'inline-input';
                if (fieldData.values && fieldData.values.length > 0) {
                    fieldData.values.forEach(val => {
                        const opt = document.createElement('option');
                        opt.value = val;
                        opt.innerText = val;
                        input.appendChild(opt);
                    });
                } else {
                    const opt = document.createElement('option');
                    opt.innerText = t('choicePreview');
                    input.appendChild(opt);
                }
            } else if (fieldData.type === 'date') {
                input = document.createElement('span');
                input.className = 'inline-date-preview';
                input.innerText = formatDateString(fieldData.format || '%d/%m/%Y');
            } else if (fieldData.multiline || fieldData.type === 'text_multiline') {
                input = document.createElement('textarea');
                input.className = 'inline-input';
                input.rows = 1; // Start small, expand if needed
                input.placeholder = varName;
            } else {
                // Default text
                input = document.createElement('input');
                input.className = 'inline-input';
                input.type = 'text';
                input.placeholder = varName;
                // Auto-size width based on placeholder
                input.style.width = `${Math.max(varName.length * 10, 80)}px`;
            }

            wrapper.appendChild(input);
            checkContainer.appendChild(wrapper);

        } else {
            // It's just text
            if (part === '') return;

            const span = document.createElement('span');
            span.className = 'inline-text';
            // Preserve newlines
            span.innerText = part;
            checkContainer.appendChild(span);
        }
    });

    dom.formPreviewContent.appendChild(checkContainer);
}

function updateDatePreview() {
    if (getMatchType() !== 'date') return;

    const format = dom.dateFormat.value;
    const content = dom.contentInput.value;

    if (!content) {
        dom.datePreview.innerHTML = '';
        return;
    }

    const formattedDate = formatDateString(format || '%d/%m/%Y');

    // Match the style of form preview
    dom.datePreview.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'preview-inline-container';

    // Split by {{mydate}}
    const parts = content.split(/(\{\{\s*mydate\s*\}\})/g);

    parts.forEach(part => {
        if (/^\{\{\s*mydate\s*\}\}$/.test(part)) {
            const span = document.createElement('span');
            span.className = 'inline-date-preview';
            span.innerText = formattedDate;
            container.appendChild(span);
        } else {
            if (part === '') return;
            const span = document.createElement('span');
            span.className = 'inline-text';
            span.innerText = part;
            container.appendChild(span);
        }
    });

    dom.datePreview.appendChild(container);
}

function formatDateString(format) {
    const now = new Date();

    const pad = n => n.toString().padStart(2, '0');

    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1);
    const year = now.getFullYear();
    const hour = pad(now.getHours());
    const minute = pad(now.getMinutes());
    const second = pad(now.getSeconds());

    // Localized
    const locale = currentLang === 'fr' ? 'fr-FR' : 'en-US';
    const dayName = now.toLocaleDateString(locale, { weekday: 'long' });
    const monthName = now.toLocaleDateString(locale, { month: 'long' });

    // Capitalize first letter
    const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

    return format
        .replace(/%d/g, day)
        .replace(/%m/g, month)
        .replace(/%Y/g, year)
        .replace(/%H/g, hour)
        .replace(/%M/g, minute)
        .replace(/%S/g, second)
        .replace(/%A/g, cap(dayName))
        .replace(/%B/g, cap(monthName));
}

// Start
init();
