/* eslint-disable max-len */
export default [
    {
        label: 'Emails',
        cards: [
            { label: "Création d'un compte", status: 'done' },
            { label: 'Menu de gauche', status: 'done' },
            { label: 'Liste des messages', status: 'done' },
            { label: 'Panneau de droite', status: 'done' },
            { label: 'Suppression', status: 'done' },
            { label: 'Gestion Lu / Non Lu', status: 'doing' },
            { label: 'Déplacer un message', status: 'todo' },
            { label: 'Configuration', status: 'todo' },
            { label: 'Composition', status: 'todo' },
            { label: 'Gestion des brouillons', status: 'todo' },
            { label: 'Suppression des conversations', status: 'dropped' },
            { label: 'Important', status: 'dropped' },

        ],
    },
    {
        label: 'Desktop OSX',
        cards: [
            { label: 'Détection des changements en local', status: 'doing' },
            { label: 'Propagation des modifications vers le Cozy', status: 'done' },
            { label: 'Détection des changements du Cozy', status: 'done' },
            { label: 'Propagation des modifications en local', status: 'doing' },
            { label: 'Interface', status: 'done' },
            { label: 'Packaging', status: 'doing' },
        ],
    },
    {
        label: 'Mobile iOS',
        cards: [
            { label: 'Préparation / Etude', status: 'done' },
            { label: 'Interface', status: 'todo' },
            { label: 'Fichiers', status: 'todo' },
            { label: 'Packaging', status: 'todo' },
            { label: 'Service', status: 'dropped' },
            { label: 'Contacts', status: 'dropped' },
            { label: 'Calendrier', status: 'dropped' },
            { label: 'Photos', status: 'dropped' },
            { label: 'Notifications', status: 'dropped' },
        ],
    },
    {
        label: 'Partage évènements',
        cards: [
            { label: 'Modèle théorique', status: 'done' },
            { label: 'Data system', status: 'done' },
            { label: 'Proxy', status: 'done' },
            { label: 'Calendar', status: 'done' },
        ],
    },
    {
        label: 'Partage calendrier',
        cards: [
            { label: 'Modèle théorique', status: 'doing' },
            { label: 'Data system', status: 'todo' },
            { label: 'Proxy', status: 'todo' },
            { label: 'Calendar', status: 'todo' },
        ],
    },
    { label: 'Sécurité', status: 'todo'},
    {
        label: 'Maintenance Calendrier',
        cards: [
            { label: 'Homogénéisation du build', status: 'done' },
            { label: 'Couleur des calendriers', status: 'done' },
            { label: 'Import', status: 'done' },
            { label: 'Liste', status: 'done' },
            { label: 'Synchronisation', status: 'done' },
            { label: 'Evènements récurrents', status: 'dropped' },
        ],
    },
    { label: 'Maintenance Fichier', status: 'todo' },
    { label: 'Etude de mutualisation', status: 'doing' },
    { label: 'Rework UX Home', status: 'dropped'},
    { label: 'Augmenter la communauté de développeur', status: 'dropped'},
]
