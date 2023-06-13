USE Hierarchical;

WITH RECURSIVE category_path (category_id, name, parent_category_id, path) AS (
    SELECT category_id, name, parent_category_id, name as path
    FROM categories
    WHERE parent_category_id IS NULL
    UNION ALL
    -- aliases "c" and "p"
    SELECT c.category_id, c.name, c.parent_category_id, CONCAT(p.path, ' > ', c.name) as path
    FROM category_path p
    JOIN categories c ON c.parent_category_id = p.category_id
)
SELECT name, path AS `Category Path`
FROM category_path
ORDER BY name;