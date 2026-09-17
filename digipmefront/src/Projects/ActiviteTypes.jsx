export const ACTIVITE_TYPES = [
    { value: "DEVELOPPEMENT_WEB", label: "Développement Web" },
    { value: "APPLICATION_MOBILE", label: "Application Mobile" },
    { value: "MARKETING_DIGITAL", label: "Marketing Digital" },
    { value: "CRM_ERP", label: "CRM / ERP" },
    { value: "CYBERSECURITE", label: "Cybersécurité" },
    { value: "CLOUD_HEBERGEMENT", label: "Cloud & Hébergement" },
    { value: "AUTOMATISATION", label: "Automatisation" },
    { value: "DESIGN_UI_UX", label: "Design UI/UX" },
    { value: "AUTRE", label: "Autre" },
];

export function typeLabel(value) {
    return ACTIVITE_TYPES.find((t) => t.value === value)?.label || value;
}