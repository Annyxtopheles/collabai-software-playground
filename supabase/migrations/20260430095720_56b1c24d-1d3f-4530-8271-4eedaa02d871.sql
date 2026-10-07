CREATE OR REPLACE FUNCTION public.auto_assign_admin_role()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  IF NEW.email IN (
    'mehedi.hasan@sjinnovation.com',
    'mujammal.haque@sjinnovation.com',
    'marketing@sjinnovation.com'
  ) THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin'::app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$function$;

-- Backfill: if the account already exists, grant admin now
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role FROM auth.users
WHERE email = 'marketing@sjinnovation.com'
ON CONFLICT (user_id, role) DO NOTHING;