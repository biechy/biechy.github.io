// Turns `:::kind[Label]` container directives into styled callouts.
//
//   :::definition[Random variable]   -> <aside class="callout" data-kind="definition">
//   :::proof[Proof]                  -> collapsible <details> block
//   ::::tabs ... ::::                -> groups several callouts into tabs
//
// Any other directive (e.g. an accidental `:word` in prose) is restored as text.
import { visit } from "unist-util-visit";

const KINDS = {
  note: "Note",
  info: "Info",
  tips: "Tips",
  definition: "Definition",
  proposition: "Proposition",
  theorem: "Theorem",
  proof: "Proof",
  exercise: "Example",
};

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (node.type === "containerDirective" && node.name === "tabs") {
        node.data = { hName: "div", hProperties: { className: ["tabs"], "data-tabs": "" } };
        return;
      }

      if (node.type === "containerDirective" && node.name in KINDS) {
        const labelNode = node.children[0]?.data?.directiveLabel ? node.children.shift() : null;
        const isProof = node.name === "proof";
        const title = {
          type: "calloutTitle",
          data: {
            hName: isProof ? "summary" : "p",
            hProperties: { className: ["callout-title"] },
          },
          children: labelNode ? labelNode.children : [{ type: "text", value: KINDS[node.name] }],
        };
        const body = {
          type: "calloutBody",
          data: { hName: "div", hProperties: { className: ["callout-body"] } },
          children: node.children,
        };
        node.children = [title, body];
        node.data = {
          hName: isProof ? "details" : "aside",
          hProperties: { className: ["callout"], "data-kind": node.name },
        };
        return;
      }

      if (
        parent &&
        index !== undefined &&
        (node.type === "textDirective" || node.type === "leafDirective")
      ) {
        const text = { type: "text", value: `:${node.name}` };
        const restored = node.type === "leafDirective" ? { type: "paragraph", children: [text, ...node.children] } : text;
        parent.children.splice(index, 1, restored, ...(node.type === "textDirective" ? node.children : []));
      }
    });
  };
}
