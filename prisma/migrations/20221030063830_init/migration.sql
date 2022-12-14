-- AlterTable
ALTER TABLE `genres` MODIFY `created_at` TIMESTAMP(0) NOT NULL DEFAULT NOW(),
    MODIFY `updated_at` TIMESTAMP(0) NOT NULL DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE `items` MODIFY `created_at` TIMESTAMP(0) NOT NULL DEFAULT NOW(),
    MODIFY `updated_at` TIMESTAMP(0) NOT NULL DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` TIMESTAMP(0) NOT NULL DEFAULT NOW(),
    MODIFY `updated_at` TIMESTAMP(0) NOT NULL DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP;
