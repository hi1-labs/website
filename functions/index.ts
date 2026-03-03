// Cloudflare Pages Function: redirect root to locale based on Accept-Language
export const onRequest: PagesFunction = async (context) => {
  const acceptLanguage = context.request.headers.get('Accept-Language') || '';
  const lower = acceptLanguage.toLowerCase();
  const preferredLang = lower.includes('kk') ? 'kk' : lower.includes('ru') ? 'ru' : 'en';
  const url = new URL(context.request.url);
  return Response.redirect(new URL(`/${preferredLang}/`, url), 302);
};
