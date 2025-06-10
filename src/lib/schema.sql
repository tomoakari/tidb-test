-- Create group table
CREATE TABLE IF NOT EXISTS `group` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

-- Create user table
CREATE TABLE IF NOT EXISTS `user` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `group_id` INT NOT NULL,
    FOREIGN KEY (`group_id`) REFERENCES `group`(`id`)
);

-- Insert initial group data
INSERT INTO `group` (`name`) VALUES
    ('マーケティング部'),
    ('営業部'),
    ('開発部');
