// Accessibility commitment template page.
import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = { title: "Accessibility" };
export default function AccessibilityPage() { return <LegalPage eyebrow="Accessibility" title="Accessibility commitment" intro="We want every visitor to be able to find information and request help comfortably." sections={[{ title: "Our approach", body: "This template uses semantic headings, keyboard-accessible navigation, visible focus styles, labeled form controls, readable contrast, responsive layouts, and reduced-motion preferences." },{ title: "Ongoing improvement", body: "Accessibility is an ongoing practice. Client content, third-party tools, and future changes should be reviewed regularly against current accessibility guidance." },{ title: "Need assistance?", body: "If you experience difficulty using the site, contact the business by phone or email. Add the client’s preferred accessibility contact process and expected response time before publishing." }]} />; }
// End accessibility commitment page.
