export function estimateTokens(text: string): number {
  // Rough estimate: 1 token is about 4 characters in English.
  // This is not exact, but good enough for MVP comparisons.
  return Math.ceil(text.length / 4);
}

export function calculateTokenSavings(original: string, compressed: string) {
  const originalTokens = estimateTokens(original);
  const compressedTokens = estimateTokens(compressed);
  const savedTokens = Math.max(originalTokens - compressedTokens, 0);
  const savedPercent =
    originalTokens === 0 ? 0 : Math.round((savedTokens / originalTokens) * 100);

  return {
    originalTokens,
    compressedTokens,
    savedTokens,
    savedPercent
  };
}