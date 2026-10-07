import DOMPurify from "dompurify";

/**
 * Sanitize HTML content and ensure all <a> tags open in a new tab.
 * Uses post-processing to inject target="_blank" on all anchor tags.
 */
export function sanitizeWithNewTabLinks(html: string): string {
  const clean = DOMPurify.sanitize(html, {
    ADD_ATTR: ['target', 'rel'],
  });

  // Post-process: inject target="_blank" and rel on all <a> tags
  const div = document.createElement('div');
  div.innerHTML = clean;
  div.querySelectorAll('a').forEach((a) => {
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });

  return div.innerHTML;
}
