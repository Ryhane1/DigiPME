CREATE TABLE user_app (
                          id             BIGINT AUTO_INCREMENT PRIMARY KEY,
                          user_type      VARCHAR(31)     NOT NULL,
                          nom            VARCHAR(255)    NOT NULL,
                          email          VARCHAR(255)    NOT NULL,
                          password       VARCHAR(255)    NOT NULL,
                          telephone      VARCHAR(50)     NOT NULL,
                          adresse        VARCHAR(255),
                          role           VARCHAR(20)     NOT NULL,

                          rc             VARCHAR(100),
                          activite       VARCHAR(255),

                          specialite     VARCHAR(255),
                          note_moyenne   DOUBLE,

                          CONSTRAINT uk_user_app_email UNIQUE (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_user_app_role ON user_app (role);
CREATE INDEX idx_user_app_user_type ON user_app (user_type);


CREATE TABLE project (
                         id              BIGINT AUTO_INCREMENT PRIMARY KEY,
                         titre           VARCHAR(255)   NOT NULL,
                         type            VARCHAR(50)    NOT NULL,
                         description     VARCHAR(2000),
                         prix            DOUBLE         NOT NULL,
                         date_creation   DATE           NOT NULL,
                         status          VARCHAR(20)    NOT NULL,
                         pme_id          BIGINT,

                         CONSTRAINT fk_project_pme FOREIGN KEY (pme_id) REFERENCES user_app (id)
                             ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_project_pme_id ON project (pme_id);
CREATE INDEX idx_project_status ON project (status);
CREATE INDEX idx_project_date_creation ON project (date_creation);


CREATE TABLE offer (
                       id               BIGINT AUTO_INCREMENT PRIMARY KEY,
                       description      VARCHAR(2000)  NOT NULL,
                       prix_proposer    DOUBLE         NOT NULL,
                       date_livraison   DATE           NOT NULL,
                       status           VARCHAR(20)    NOT NULL,
                       project_id       BIGINT         NOT NULL,
                       freelancer_id    BIGINT         NOT NULL,

                       CONSTRAINT fk_offer_project FOREIGN KEY (project_id) REFERENCES project (id)
                           ON DELETE CASCADE,
                       CONSTRAINT fk_offer_freelancer FOREIGN KEY (freelancer_id) REFERENCES user_app (id)
                           ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_offer_project_id ON offer (project_id);
CREATE INDEX idx_offer_freelancer_id ON offer (freelancer_id);
CREATE INDEX idx_offer_status ON offer (status);


CREATE TABLE review (
                        id             BIGINT AUTO_INCREMENT PRIMARY KEY,
                        note           BIGINT         NOT NULL,
                        commentaire    VARCHAR(2000)  NOT NULL,
                        project_id     BIGINT,
                        pme_id         BIGINT,
                        freelancer_id  BIGINT,

                        CONSTRAINT fk_review_project FOREIGN KEY (project_id) REFERENCES project (id)
                            ON DELETE CASCADE,
                        CONSTRAINT fk_review_pme FOREIGN KEY (pme_id) REFERENCES user_app (id)
                            ON DELETE CASCADE,
                        CONSTRAINT fk_review_freelancer FOREIGN KEY (freelancer_id) REFERENCES user_app (id)
                            ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_review_freelancer_id ON review (freelancer_id);
CREATE INDEX idx_review_pme_id ON review (pme_id);
CREATE INDEX idx_review_project_id ON review (project_id);