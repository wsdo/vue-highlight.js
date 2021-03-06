/**
 * Deeply get concatenated text from slot.
 *
 * @export
 * @param {VNode[]} slot A slot. (The collection of VNode)
 * @returns {string}
 */
export default function getSlotText(slot) {
	if (Array.isArray(slot)) {
		return slot.map(node => { // node is VNode
			if (Array.isArray(node.children) && (node.children.length > 0)) {
				return getSlotText(node.children);
			} else {
				return node.text;
			}
		}).join('');
	} else {
		return '';
	}
}
