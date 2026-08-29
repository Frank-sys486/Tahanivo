import assert from "node:assert/strict";
import test from "node:test";
import { collection } from "./catalog.js";

test("catalog entries have unique ids and image assets", () => {
  assert.equal(new Set(collection.map(({ id }) => id)).size, collection.length);
  assert.ok(collection.every(({ image }) => image.startsWith("/images/")));
});
