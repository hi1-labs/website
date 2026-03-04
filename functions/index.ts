// Cloudflare Pages Function: redirect root to locale based on Accept-Language
const SUPPORTED_LOCALES = ['en', 'ru', 'kk', 'es', 'pt'] as const;
const DEFAULT_LOCALE = 'en';

interface EventContext {
  request: Request;
}

export const onRequest = async (context: EventContext): Promise<Response> => {
  const acceptLanguage = context.request.headers.get('Accept-Language') || '';
  const lower = acceptLanguage.toLowerCase();
  const preferredLang = SUPPORTED_LOCALES.find((l) => lower.includes(l)) ?? DEFAULT_LOCALE;
  const url = new URL(context.request.url);
  return Response.redirect(new URL(`/${preferredLang}/`, url), 302);
};
