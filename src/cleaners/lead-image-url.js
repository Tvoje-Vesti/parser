import validUrl from 'valid-url';

export default function clean(leadImageUrl) {
  leadImageUrl = leadImageUrl.trim();
  if (validUrl.isWebUri(leadImageUrl)) {
    return leadImageUrl;
  }

  // Handle cases where url has relative schema.
  // Optimistically use https
  if (leadImageUrl.startsWith("//")) {
    const httpsUrl = `https:${  leadImageUrl}`;
    if (validUrl.isWebUri(httpsUrl)) {
      return httpsUrl;
    }

    const httpUrl = `http:${  leadImageUrl}`;
    if (validUrl.isWebUri(httpUrl)) {
      return httpUrl;
    }
  }

  return null;
}
