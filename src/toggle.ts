import ones from "./_ones";

/**
 * Toggles a bit.
 * @param x an int32
 * @param i bit index
 * @param w bit width (1)
 */
function toggle(x: number, i: number, w: number=1): number {
  return x ^ (ones(w)<<i);
}
export default toggle;
