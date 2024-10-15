import { cn } from './mod.ts';
import { assertEquals } from "jsr:@std/assert";

Deno.test("should merge multiple class names", () => {
    const result = cn('class1', 'class2');
    assertEquals(result, 'class1 class2');
});

Deno.test("should handle conditional class names", () => {
    const result = cn('class1', false && 'class2', 'class3');
    assertEquals(result, 'class1 class3');
});

Deno.test("should handle arrays of class names", () => {
    const result = cn(['class1', 'class2'], 'class3');
    assertEquals(result, 'class1 class2 class3');
});

Deno.test("should handle objects with truthy values", () => {
    const result = cn({ class1: true, class2: false, class3: true });
    assertEquals(result, 'class1 class3');
});

Deno.test("should merge Tailwind CSS class names correctly", () => {
    const result = cn('p-4', 'p-2');
    assertEquals(result, 'p-2');
});

Deno.test("should handle mixed inputs", () => {
    const result = cn('class1', ['class2', { class3: true, class4: false }], 'class5');
    assertEquals(result, 'class1 class2 class3 class5');
});

Deno.test("should return an empty string for no inputs", () => {
    const result = cn();
    assertEquals(result, '');
});
