-- Mot de passe de tous les comptes : Password123!
INSERT INTO user_app (id, user_type, nom, email, password, telephone, adresse, role) VALUES
    (1, 'ADMIN', 'Youssef El Amrani', 'admin@mail.com',
     '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0611223344', 'Rabat', 'ADMIN');

INSERT INTO user_app (id, user_type, nom, email, password, telephone, adresse, role, rc, activite) VALUES
   (2, 'PME', 'Digital Maroc SARL', 'contact@digitalmaroc.ma',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0522334455', 'Casablanca', 'PME', 'RC123456', 'Commerce et distribution'),
   (3, 'PME', 'Atlas Industrie', 'contact@atlasindustrie.ma',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0523445566', 'Beni Mellal', 'PME', 'RC223344', 'Industrie agroalimentaire'),
   (4, 'PME', 'Sahara Textile', 'contact@saharatextile.ma',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0524556677', 'Marrakech', 'PME', 'RC334455', 'Textile et confection');

INSERT INTO user_app (id, user_type, nom, email, password, telephone, adresse, role, specialite, note_moyenne) VALUES
   (5, 'FREELANCER', 'Sara Benjelloun', 'sara.benjelloun@mail.com',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0622334455', 'Fès', 'FREELANCER', 'Design UI/UX', 5.0),
   (6, 'FREELANCER', 'Karim Ziani', 'karim.ziani@mail.com',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0633445566', 'Tanger', 'FREELANCER', 'Cybersécurité', 4.0),
   (7, 'FREELANCER', 'Imane Radi', 'imane.radi@mail.com',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0644556677', 'Agadir', 'FREELANCER', 'Marketing Digital', NULL);

INSERT INTO project (id, titre, type, description, prix, date_creation, status, pme_id) VALUES
    (1, 'Refonte du site e-commerce', 'DEVELOPPEMENT_WEB', 'Refonte complète du site vitrine et ajout d''un module e-commerce.', 25000, '2026-08-01', 'TERMINE', 2),
    (2, 'Application mobile de suivi de commandes', 'APPLICATION_MOBILE', 'Application iOS/Android pour suivre les livraisons.', 40000, '2026-08-15', 'EN_COURS', 2),
    (3, 'Mise en place d''un ERP', 'CRM_ERP', 'ERP pour la gestion des stocks et de la production.', 60000, '2026-07-10', 'TERMINE', 3),
    (4, 'Audit de cybersécurité', 'CYBERSECURITE', 'Audit de l''infrastructure réseau et recommandations.', 15000, '2026-09-01', 'EN_ATTENTE', 3),
    (5, 'Campagne marketing digital', 'MARKETING_DIGITAL', 'Stratégie et réseaux sociaux sur 3 mois.', 12000, '2026-09-05', 'EN_ATTENTE', 4),
    (6, 'Refonte identité visuelle', 'DESIGN_UI_UX', 'Nouveau logo, charte graphique et maquettes.', 18000, '2026-08-20', 'EN_COURS', 4);

INSERT INTO offer (id, description, prix_proposer, date_livraison, status, project_id, freelancer_id) VALUES
      (1, 'Refonte avec maquettes Figma et intégration React.', 24000, '2026-09-15', 'ACCEPTEE', 1, 5),
      (2, 'Campagne de lancement et SEO inclus.', 26000, '2026-09-10', 'REFUSEE', 1, 7),
      (3, 'Interface mobile soignée avec suivi temps réel.', 38000, '2026-10-01', 'ACCEPTEE', 2, 5),
      (4, 'Déploiement Odoo ERP avec formation des équipes.', 58000, '2026-08-30', 'ACCEPTEE', 3, 6),
      (5, 'Audit réseau + rapport de vulnérabilités.', 14500, '2026-09-25', 'EN_ATTENTE', 4, 6),
      (6, 'Stratégie social media + contenu.', 11500, '2026-09-30', 'EN_ATTENTE', 5, 7),
      (7, 'Nouvelle identité visuelle + maquettes Figma.', 17000, '2026-09-20', 'ACCEPTEE', 6, 5);

INSERT INTO review (id, note, commentaire, project_id, pme_id, freelancer_id) VALUES
      (1, 5, 'Excellent travail, livré dans les délais.', 1, 2, 5),
      (2, 4, 'Bonne mise en place, quelques ajustements après livraison.', 3, 3, 6);