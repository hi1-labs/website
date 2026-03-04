// Cloudflare Pages Function: redirect root to locale based on Accept-Language
interface EventContext {
  request: Request;
}

export const onRequest = async (context: EventContext): Promise<Response> => {
  const acceptLanguage = context.request.headers.get('Accept-Language') || '';
  const lower = acceptLanguage.toLowerCase();
  const preferredLang = lower.includes('kk') ? 'kk' : lower.includes('ru') ? 'ru' : lower.includes('es') ? 'es' : lower.includes('pt') ? 'pt' : 'en';
  const url = new URL(context.request.url);
  return Response.redirect(new URL(`/${preferredLang}/`, url), 302);
};
