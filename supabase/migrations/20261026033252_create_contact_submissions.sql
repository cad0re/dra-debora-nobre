/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) - sender's full name
  - `phone` (text, not null) - contact phone
  - `legal_area` (text, not null) - "Cível", "Criminal", "Consultoria" or "Outro"
  - `message` (text, not null) - short case summary
  - `is_emergency` (boolean, default false) - flagged from the 24h emergency flow
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_submissions`.
- Grant INSERT to `anon, authenticated` so the public contact form can submit.
- Public visitors should NOT be able to read other people's private case details, so
  SELECT/UPDATE/DELETE are granted only to `service_role` (server-side / dashboard),
  and there are NO anon SELECT/UPDATE/DELETE policies. This keeps submissions private.
- INSERT policy for anon + authenticated with WITH CHECK (true): the form is intentionally
  public, so any visitor may create a submission. This is the documented public-write pattern.
3. Notes
- No user_id / auth coupling: this is a marketing contact form with no sign-in.
- The lawyer can review submissions in the Supabase dashboard (service_role bypasses RLS).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  legal_area text NOT NULL,
  message text NOT NULL,
  is_emergency boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow the public contact form to insert; keep reads/updates/deletes server-side only.
GRANT INSERT ON contact_submissions TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON contact_submissions TO service_role;

DROP POLICY IF EXISTS "public_can_submit_contact" ON contact_submissions;
CREATE POLICY "public_can_submit_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
ON contact_submissions (created_at DESC);