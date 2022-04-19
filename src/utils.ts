export function getChars(word: string): string[] {
  return Array.from(word);
}

export function sortArray(
  array: any[],
  side: "desc" | "asc" = "desc",
  getValue: (val: any) => any = (value: any) => value
) {
  return array.sort((a, b) =>
    side === "desc" ? getValue(b) - getValue(a) : getValue(a) - getValue(b)
  );
}
