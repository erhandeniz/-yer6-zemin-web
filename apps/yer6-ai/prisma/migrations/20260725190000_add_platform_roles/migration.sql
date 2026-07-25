-- RELEASE 1 / M1 — additive role values only.
-- PostgreSQL forbids USING a newly added enum value inside the same
-- transaction that adds it, so role additions live in their own migration;
-- the tenancy migration (M2) that uses SUPER_ADMIN runs as a separate
-- transaction afterwards. Existing values (ENGINEER, MANAGER, ADMIN) are
-- untouched; nothing is dropped or rewritten.

ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'SUPER_ADMIN';
ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'COMPANY_ADMIN';
ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'MEMBER';
ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'VIEWER';
ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'DEMO';
