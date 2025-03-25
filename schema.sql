create database astrologger;

CREATE TABLE user_master (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,   -- Auto-incrementing ID
    user_name VARCHAR(128) NOT NULL,        -- User's Name (Required)
    phone VARCHAR(15) NOT NULL UNIQUE,      -- Unique Phone Number (Required)
    email VARCHAR(256) NOT NULL UNIQUE,     -- Unique Email (Required)
    archived BOOLEAN DEFAULT FALSE,         -- Soft Delete Flag (Default: False)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,   -- Auto Timestamp (Created)
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Auto Timestamp (Updated)
);
CREATE INDEX idx_user_phone ON user_master(phone);
CREATE INDEX idx_user_email ON user_master(email);


CREATE TABLE request_log (
    id BINARY(16) PRIMARY KEY,                -- Stores UUID efficiently
    kundli_id BINARY(16) NOT NULL,            -- Foreign key referencing kundli_master
    request_data JSON NOT NULL,               -- Stores other request data dynamically
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto-set timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Auto-update timestamp
    -- CONSTRAINT fk_kundli FOREIGN KEY (kundli_id) REFERENCES kundli_master(id) ON DELETE CASCADE
);
CREATE INDEX idx_request_kundli ON request_log(kundli_id);

CREATE TABLE kundli_master (
    id BINARY(16) NOT NULL PRIMARY KEY,                  -- UUID stored efficiently in BINARY(16)
    booking_id BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,  -- Auto-incrementing Booking ID
    user_id BIGINT UNSIGNED NOT NULL,                    -- Foreign Key referencing user_master
    status ENUM('created', 'processing', 'generated', 'failed') DEFAULT 'created',  -- Status Enum
    payment_status ENUM('initiated', 'success', 'failed', 'refunded') DEFAULT 'initiated', -- Payment Status Enum
    user_name VARCHAR(128) NOT NULL,                     -- User's Name
    gender ENUM('M', 'F', 'NA') NOT NULL,                -- Gender Enum (M/F/NA)
    phone VARCHAR(15) NOT NULL,                          -- Phone Number
    email VARCHAR(264) NULL,                             -- Email (Nullable)
    dob DATE NOT NULL,                                   -- Date of Birth
    tob TIME NOT NULL,                                   -- Time of Birth (Stored as TIME instead of VARCHAR)
    latitude DOUBLE(9,6) NOT NULL,                       -- Latitude (Precision Set)
    longitude DOUBLE(9,6) NOT NULL,                      -- Longitude (Precision Set)
    city VARCHAR(64) NOT NULL,                           -- City
    state VARCHAR(64) NOT NULL,                          -- State
    country VARCHAR(64) NOT NULL,                        -- Country
    display_name VARCHAR(256) NOT NULL,                  -- Display Name
    language VARCHAR(8) NOT NULL,                        -- Language Code
    chart_style VARCHAR(16) NOT NULL,                    -- Chart Style
    source VARCHAR(64) NULL,                             -- Source
    source_pdf_url TEXT NULL,                            -- Source PDF URL
    final_pdf_url TEXT NULL,                             -- Final PDF URL
    archived BOOLEAN DEFAULT FALSE,                      -- Soft Delete Flag (Default: False)
    remarks TEXT NULL,                                   -- Remarks/Notes
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,      -- Auto Timestamp (Created)
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Auto Timestamp (Updated)
    
    -- Foreign Key Constraint
    -- CONSTRAINT fk_kundli_user FOREIGN KEY (user_id) REFERENCES user_master(id) ON DELETE CASCADE
);

CREATE INDEX idx_kundli_user ON kundli_master(user_id);
CREATE INDEX idx_kundli_status ON kundli_master(status);
CREATE INDEX idx_kundli_booking ON kundli_master(booking_id);