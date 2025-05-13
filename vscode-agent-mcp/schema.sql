-- Table for managing URL lists (handles FR001, FR006, FR007, FR008, FR011)
CREATE TABLE lists (
    id SERIAL PRIMARY KEY,
    custom_slug VARCHAR(100) UNIQUE,                -- Custom URL chosen by user (FR006)
    auto_generated_slug VARCHAR(100) UNIQUE,        -- Auto-generated URL (FR007)
    title VARCHAR(255),                            -- Title of the list
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    published_at TIMESTAMP,                        -- When the list was published (FR008)
    is_published BOOLEAN DEFAULT false,            -- Publication status
    deleted_at TIMESTAMP                           -- Soft delete support (FR012)
);

-- Table for storing URLs within lists (handles FR002, FR003, FR004, FR005)
CREATE TABLE links (
    id SERIAL PRIMARY KEY,
    list_id INTEGER REFERENCES lists(id) ON DELETE CASCADE,
    url TEXT NOT NULL,                             -- The actual URL
    title VARCHAR(255),                            -- Auto-fetched or user-provided title
    description TEXT,                              -- Description of the URL
    position INTEGER,                              -- Order of URLs in the list
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,                          -- Soft delete support
    CONSTRAINT fk_list
        FOREIGN KEY(list_id) 
        REFERENCES lists(id)
);

-- Indexes for better query performance
CREATE INDEX idx_links_list_id ON links(list_id);
CREATE INDEX idx_lists_slugs ON lists(custom_slug, auto_generated_slug);